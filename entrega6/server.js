const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require("fs");
const router = express.Router();


const handlebars = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

/* app.use(express.static(__dirname, "js")); */

app.engine(
  "hbs",
  handlebars({
    layoutDirs: __dirname + "/handlebars/views/layouts",
    extname: "hbs",
  })
);
app.set("views", __dirname + "/handlebars/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  if (productos.length > 0) {
    res.render("index", { layout: "index", data: productos });
  } else {
    res.render("index", { layout: "error"})
  }}); 


const clase = require('./Contenedor.js')
const contenedor = new clase();
const productos = contenedor.getAll();
const msgs = [];

server.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto:" + PORT);
});

app.use(express.json());

// Conecto el socket
io.on("connection", (socket) => {
  console.log("Usuario conectado.");

  socket.emit("mensaje", msgs);

  socket.emit("data_pronta", productos);

  socket.on("data_client", (data) => {
    msgs.push(data);
    //para enviarle a todos
    io.sockets.emit("mensaje", msgs);
    // 
    fs.unlink("chatlog.txt", (err) => {
      if (err) throw "Error al borrar el LOG";
    });
    fs.writeFile("chatlog.txt", "", "utf-8", (err) => {
      if (err) throw "Error al crear el nuevo LOG";
    });
    fs.appendFile("chatlog.txt", JSON.stringify(msgs), "utf-8", (err) => {
      if (err) throw "Error al escribir en el LOG";

      console.log("LOG actualizado");
    });
  });
  socket.on("mi_data", (data) => {
    productos.push(data);
    io.sockets.emit("data_pronta", productos);
  });
});
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/formulario", (req, res) => {
  res.render("form", { layout: "index" });
});

app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  productos.push(obj);
  res.redirect("/");
});