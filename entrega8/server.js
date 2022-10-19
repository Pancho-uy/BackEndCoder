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
const { conectorChat } = require("./src/conectorChat");
const { conectorDB } = require("./src/conectorDB");
const knexChat = require("knex")(conectorChat); // SQLITE 3 ( CHATS)
const  knexProd = require('knex')(conectorDB); // MYSQL ( PRODUCTOS )
//------------------------------------------------------------------------//
/* const configChat = require("./conectorChat"); */ 

const arr = [];

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
     knexChat
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
       });

  socket.on("data_array", (data) => {
    arr.push(data);
     arr.map((item) => {
     knexProd("productos")
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
