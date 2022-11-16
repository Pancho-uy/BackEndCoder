require('dotenv').config()
const express = require('express')
const { Server: HttpServer} = require('http')
const { Server: IOServer} = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const PORT = process.env.PORT

app.use(express.static('public'))

// mensajes guardados en la base de datos
const arrayMens = [
    {author: 'Fede', text: 'Hola soy Fede', date: '2021-04-05 10:00:00'},
    {author: 'Juan', text: 'Hola Soy Juan', date: '2021-04-05 10:00:00'},
    {author: 'Segio', text: 'Hola Hola soy Sergio', date: '2021-04-05 10:00:00'}
] 

app.get('/', (req, res) => {
    res.send('Hello World')
})

httpServer.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})

io.on('connection', (cliente) => {
    console.log('Un cliente se conecto')
    cliente.emit('mensajes', arrayMens)

    cliente.on('new-message', mensaje => {
        arrayMens.push(mensaje)
        io.sockets.emit('mensajes', arrayMens)
    })

})


// https://web-server-fede.herokuapp.com/