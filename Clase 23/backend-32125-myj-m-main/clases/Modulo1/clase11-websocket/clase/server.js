const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')


const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//...
// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('public'))


// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})


// El servidor funcionando en el puerto 4000
const port = 4000
const server = httpServer.listen(port, () => console.log(`Listening on port ${server.address().port}`))

let mensajes = []
io.on('connection', (socket) => {
    // console.log(socket)
    console.log('usuario conectado')

    // emitiendo un mensaje del servidor al cliente
    // socket.emit('mensaje', 'mensaje del servidor')

    // escuchando lo que recibe del cliente
    socket.on('cliente-mensaje', (data) => {
        console.log(data)
        console.log(socket.id)
        // recibe los mensajes de los clientes y los devuelce a todos los clientes
        mensajes.push({socketId: socket.id, mensaje: data})
        io.sockets.emit('mensajes', mensajes)
    })
    // para saber en el servidor cuando un usuario se desconecta
    socket.on('disconnect', () => {
        console.log('usuario desconectado')
    })
})

