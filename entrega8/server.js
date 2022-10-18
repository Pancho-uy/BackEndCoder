const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const { Server } = require("socket.io");
const io = new Server(server);
const knex = require("./src/db"); // MYSQL ( PRODUCTOS )
const _knex = require("./knexfile"); // SQLITE 3 ( CHATS)

const arr = [];

/* const arr = [
  {
    title: "Escuadra",
    price: 100,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    title: "Calculadora",
    price: 200,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    title: "Globo Terráqueo",
    price: 150,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
    title: "Lapiz Mecanico",
    price: 45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-512.png",
  },
  {
    title: "Calculadora Cientifica Casio",
    price: 74,
    thumbnail:
      "https://cdn2.iconfinder.com/data/icons/logos-brands-4/24/logo_brand_brands_logos_google_keyboard-512.png",
  },
];

 */const msgs = [];

//Basic cfg
app.use(express.static(__dirname + "/public"));

server.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto:" + PORT);
});

app.use(express.json());
io.on("connection", (socket) => {
  console.log("Usuario conectado.");

  socket.emit("msg_back", msgs);

  socket.emit("data_ready", arr);

  socket.on("data_client", (data) => {
    msgs.push(data);
    //para enviarle a todos los nodos
    io.sockets.emit("msg_back", msgs);
    //#rGrabo Chat en SQLITE3
     _knex
       .from("chatlog")
       .select("*")
       .del()
       .then(() => {
         console.log("updated");
       })
       .catch((err) => {
         console.log(err);
       });

     knex("chatlog")
       .insert(msgs)
       .then(() => {
         console.log("Msgs del chat agregado a la DB !")})
         .catch((err) => {
           console.log(err);
         });
       });

  socket.on("data_array", (data) => {
    arr.push(data);
     arr.map((item) => {
     knex("productos")
       .insert(arr)
       .then(() => {
         console.log("Producto agregado.")
      });
    io.sockets.emit("data_ready", arr);
  });
});
});
  //Rutas

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
