const express = require("express");
const app = express();
const http = require("http");
const faker = require("faker");
//
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
//
const { Server } = require("socket.io");
const io = new Server(server);
//
const { normalize, schema } = require("normalizr");
const fs = require("fs");
const print = require("./helper");
const { v4: uuidv4 } = require("uuid");
// creo un array con fake data
const arr = [
  {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: faker.image.business(),
  },
  {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: faker.image.business(),
  },
  {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: faker.image.business(),
  },
  {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: faker.image.business(),
  },
  {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: faker.image.business(),
  },
];

let objeto;
let msgs = [];
let denormalizedmsgs = [];
const authorSchema = new schema.Entity("author");
const msgSchema = new schema.Entity("messages", {
  id: uuidv4(),
  author: authorSchema,
});

const chatSchema = new schema.Entity("chat", {
  author: authorSchema,
  messages: [msgSchema],
});

app.use(express.static(__dirname + "/public"));

app.use(express.json());
io.on("connection", (socket) => {
  console.log("Usuario conectado.");

  fs.readFile("desnormalizado.txt", "utf-8", (err, data) => {
    if (err) throw "Error al leer archivo txt";
    objeto = JSON.parse(data);
  });

  socket.emit("msg_back", objeto);

  socket.emit("data_ready", arr);

  socket.on("data_client", (data) => {
    objeto.push(data);
    fs.writeFile(
      "desnormalizado.txt",
      JSON.stringify(objeto, false, 2),
      "utf-8",
      (err) => {
        if (err) throw "Error al escribir txt!";
        console.log("Elemento agregado al txt");
      }
    );
    async function hola() {
      const read = await fs.promises.readFile("desnormalizado.txt", "utf-8");
      console.log(read);
      let toNormalized = JSON.parse(read);

      const msgsNormalized = normalize(
        { ...toNormalized, id: "contenido" },
        chatSchema
      );
      print(msgsNormalized);
      fs.writeFile(
        "normalizado.txt",
        JSON.stringify(msgsNormalized, false, 2),
        "utf-8",
        (err) => {
          if (err) throw "Error al escribir txt";
          console.log("Elemento agregado al txt");
        }
      );
    }
    (async () => {
      try {
        await hola();
      } catch (error) {
        console.log(error);
      }
    })();
    // les llega a todos
    io.sockets.emit("msg_back", denormalizedmsgs);
  });

  socket.on("data_array", (data) => {
    arr.push(data);
    io.sockets.emit("data_ready", arr);
  });
});
//Rutas

app.get("/api/normalized", (req, res) => {
  res.sendFile(__dirname + "/normalizado.txt");
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});