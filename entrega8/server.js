const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require("fs");
const clase = require('./src/Contenedor.js')

//----------------------Conecto a DB----------------------//
const { configMaria } = require("./src/conectorMariaDB");
const { configSQLite } = require("./src/conectorSQLite");
const knex = require('knex');
const _knex = require('knex');

const Chatdb = _knex(configSQLite);
const Productosdb = knex(configMaria);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

/* app.use(express.static(__dirname, "js")); */
const { engine } = require("express-handlebars");

app.engine("hbs",engine({extname:"hbs", defaultLayouts: false, layoutDirs: __dirname + "/handlebars/views/layouts",}));
app.set("views", __dirname + "/handlebars/views");
app.set("view engine", "hbs");

const productos = new clase(Productosdb);

app.get("/", (req, res) => {
  todos=productos.getAll();
  if (todos.length > 0) {
    res.render("index", { layout: "index", data: productos });
  } else {
    res.render("index", { layout: "error"})
  }}); 

  
/*   const contenedor = new clase();
  const productos = contenedor.getAll();
  const msgs = []; */

// Creo la tabla en el servidor
/* 
knex.schema.createTable('productos', table => {
    table.increments('id').primary();
    table.string('title');
    table.integer('price');
    table.string('thumbnail');
    table.string('descripcion');
    table.string('timestamp');
}).then(() => console.log('Tabla creada'))

//Inserto los productos en la tabla

knex('productos').insert(productos)
.then(() => console.log('Productos insertados'))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knex.destroy();
});
 */

// Arranco el server
server.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto:" + PORT);
});


// Conecto el socket
io.on("connection", (socket) => {
  console.log("Usuario conectado.");
  socket.emit("mensaje", msgs);
  socket.emit("data_pronta", productos);

// Grabo chat en DB
  socket.on("data_client", (data) => {
    msgs.push(data);
    //para enviarle a todos
    io.sockets.emit("mensaje", msgs);
    Chatdb("chat").insert(data).then((res) => {
      console.log("Chat guardado en DB");
    });
  });
  // grabo productos en DB
  socket.on("mi_data", (data) => {
    console.log(data);
    productos.push(data);
    io.sockets.emit("data_pronta", productos);
    Productosdb("productos").insert(data).then((res) => {
      console.log("Producto guardado en DB");
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
  res.redirect("/");})
});