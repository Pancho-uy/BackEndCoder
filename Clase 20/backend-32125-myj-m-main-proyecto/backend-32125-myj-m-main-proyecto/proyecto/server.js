// server express whit listen on port 8080

const express = require('express')
const { Router } = express
require('dotenv').config()
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
// importacion de handlebars
const handlebars = require('express-handlebars')
const Products = require('./services/productos.js')
const Mensajes = require('./services/mensajes.js')
const cors = require('cors')
// module Router


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const port = process.env.PORT || 8000

const products = new Products()
const messages = new Mensajes()

/////////////////////// configuracion de handlebars /////////////////////////
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
)
app.set("view engine", "hbs")
app.set("views", "./views")

//////////////  middleware  ///////////////////////

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


////////////////////// Rutas //////////////////////////////

const routerfProductos = Router()

routerfProductos.get('/', (req, res) => {
    console.log(Products)
    // const productos = new Products
    const productos = products.getProducts()
    if(productos.error) res.status(200).json({msg: 'No hay productos cargados'}) 
    res.status(200).json(productos)
})

routerfProductos.get('/:id', (req, res) => {
    // const productos = new Products
    const producto = products.getProductById(req.params.id)
    if(producto.error) res.status(404).json({msg: 'Producto no encontrado'})
    res.status(200).json( producto )
})

routerfProductos.post('/', (req, res) => {
    // const productos = new Products
    console.log(req.body)
    const producto = products.addProduct(req.body)
    res.status(201).json(producto)
})

routerfProductos.put('/:id', (req, res) => {
    // const productos = new Products
    const producto = products.updateProduct(req.params.id, req.body)
    res.status(200).json(producto)
})

routerfProductos.delete('/:id', (req, res) => {
    // const productos = new Products
    const producto = products.deleteProduct(req.params.id)
    res.status(200).json(producto)
})


app.use('/api/productos', routerfProductos)

////////////////////////////////////////////////////////


app.get('/', (req, res) => {
    res.send('Hello World!')
})


///////////////// socket.io ///////////////////////
io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado!')
    /////////////////// productos ///////////////////////
    socket.emit('productos', products.getProducts())

    // socket.on('nuevoProducto', (data) => {
    //     console.log(data)
    //     products.addProduct(data)
    //     io.sockets.emit('productos', products.getProducts())
    // })
    // para la otra forma de enviar los datos
    socket.on('update', (data) => {
        console.log(data === 'ok')
        if (data === 'ok') io.sockets.emit('productos', products.getProducts())
    })
    /////////////////// mensajes ///////////////////////
    socket.emit('mensajes', await messages.getAll())

    socket.on('nuevoMensaje', async (data) => {
        console.log(data)
        await messages.save(data)
        io.sockets.emit('mensajes', await messages.getAll())
    })
})


const server = httpServer.listen(port, () => {
    console.log(`Example app listening at http://localhost:${server.address().port}`)
})


// https://upload.wikimedia.org/wikipedia/commons/8/81/Camiseta-negra.jpg

// https://m.media-amazon.com/images/I/51XS20NbJnL._AC_UL320_.jpg