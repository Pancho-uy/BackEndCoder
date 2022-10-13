const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const {routerProductos} = require("./router/apiProductos")
const {routerCarrito} = require("./router/apiCarrito")

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use('/api/productos',routerProductos)
app.use('/api/carrito',routerCarrito)

io.on('connection', clientSocket => {
  console.log(`Client con la ID: #${clientSocket.id} se conectó con exito`)
  io.emit('updateProd')
  clientSocket.on('updateProd', () => {
    console.log("Se actualizo producto exitosamente")
    //clientSocket.emit('updateProd')
    io.sockets.emit('updateProd')
  })
  clientSocket.on('updateCarrito', () => {
    console.log("Se actualizo carrito con exito")
    clientSocket.emit('updateCarrito')
  })
  clientSocket.on('updateCarritoMostrar', () => {
    console.log("Se mostró carrito con exito")
    clientSocket.emit('updateCarritoMostrar')
  })
})

app.get("/", (req,res)=> {
  res.sendFile('index.html')
})


//-------------------------------------------------------------------
// Arranco el server
//-------------------------------------------------------------------
const PORT = process.env.PORT || 8080
const server = httpServer.listen(PORT, () => {
console.info(`Servidor HTTP atendiendo en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))

