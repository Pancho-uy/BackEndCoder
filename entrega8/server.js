const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const { Server } = require("socket.io");
const io = new Server(server);
//------------------------------------------------------------------------//
//                                  DB                                    //
//------------------------------------------------------------------------//
const { configChat } = require("./knexfile");
const { conectorDB } = require("./src/conectorDB");
const _knex = require("knex")(configChat); // SQLITE 3 ( CHATS)
const  knex = require('knex')(conectorDB); // MYSQL ( PRODUCTOS )
//------------------------------------------------------------------------//
/* const configChat = require("./knexfile"); */ 

const arr = [];

// productos de muestra
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

 */
const msgs = [];

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

    //#rGrabo Chat en SQLITE3    (ver clase 13/10 a partir de 1h45m...)
     _knex
       .from("chatlog")
       .select("*")
       .del()
       .insert(msgs)
       .then(() => {
         console.log("Chat agregado a la DB");
       })
       .catch((err) => {
         console.log(err);
       });

    /*  _knex
       .from("chatlog")

       .then(() => {
         console.log("Msgs del  !")})
         .catch((err) => {
           console.log(err);
         }); */
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
