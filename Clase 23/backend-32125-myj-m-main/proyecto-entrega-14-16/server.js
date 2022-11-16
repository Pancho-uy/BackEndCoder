// server express whit listen on port 8080

import express  from 'express'
import { Router }  from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'
import { Server as HttpServer } from 'http'
import { Server as IOServer }  from 'socket.io'
// importacion de handlebars
import handlebars  from 'express-handlebars'

import { Products }  from './services/productos.js'
import Mensajes  from './services/mensajes.js'
import ProductosMariaDB  from './contenedores/ContenedorProductos/contenedorProductosMaraiDB.js'
import { dbConnection }  from './database/config.js'
import ContenedorArchivo from './contenedores/ContenedorArchivo.js'

// module Router

dotenv.config()
const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const port = process.env.PORT || 8000

//+++++++++++++++++++++++++++++ Productos Archivo ++++++++++++++++++++++++++++++++

const carrtio = new ContenedorArchivo('./jsonDB/carrito.json')

//+++++++++++++++++++++++++++++ Productos Memoria ++++++++++++++++++++++++++++++++
const products = new Products()
const messages = new Mensajes()

/////////////////////////// Productos con maria db ///////////////////////////////

const productosMariaDB = new ProductosMariaDB( dbConnection.mysql , 'productos')


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


/************************** permisos de admin ***************************/

const isAdmin = true

// error adminValidate
const createErrorAdmin = (ruta, metodo) => {
    const error = {
        error: -1
    }

    if (ruta && metodo) {
        error.descripcion = `ruta ${ruta} metodo ${metodo} no autorizada`
    }else{
        error.descripcion = 'ruta no autorizada'
    }   
    return error
}

/* middelware admin */

const adminValidate = (req, res, next) => {
    if (isAdmin) {
        next()
    } else {
        res.status(403).json({ error: 'No autorizado' })
    }
}

////////////////////// Rutas //////////////////////////////

const routerfProductos = Router()

routerfProductos.get('/', adminValidate,async (req, res) => {    
    try {       
        // const productos = await productosMariaDB.getProducts() 
        // console.log(productos)
        res.status(200).json({ data: await productosMariaDB.getProducts() })        
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: 'No hay productos cargados'})         
    }
})

routerfProductos.get('/:id', adminValidate, async (req, res) => {
    try {
        const producto = await productosMariaDB.getProductById(parseInt(req.params.id))        
        res.status(200).json( {data: producto[0]})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})        
    }
})

routerfProductos.post('/', adminValidate, async (req, res) => {
    const { title, price, thumbnail } = req.body
    if (title && price && thumbnail) {
        await productosMariaDB.addProduct({
            title,
            price,
            thumbnail
        })
        return res.status(201).json({msg: 'producto agregado'})        
    }
    res.status(400).json({msg: 'No se pudo agregar el producto'})
})

routerfProductos.put('/:id', adminValidate, async (req, res) => {
    await productosMariaDB.updateProduct(req.params.id, req.body)
    res.status(200).json({msg: 'producto actualizado'})
})

routerfProductos.delete('/:id', adminValidate, async (req, res) => {
    productosMariaDB.deleteProduct(req.params.id)
    res.status(200).json({msg: `Producto con id ${req.params.id} eliminado`})
})


app.use('/api/productos', routerfProductos)

/************************************ Carrito **********************************/
// ctr + shift + c -> abre la terminal en el directorio donde se encuentra el archivo

const routerCarrito = Router()

// no existe estas dos
routerCarrito.get('/', async (req, res) => {
    try {
        res.status(200).json({ data: await carrtio.getAll() })
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: 'No hay productos cargados'})
    }
})

routerCarrito.get('/:id', async (req, res) => {
    try {
        const carrito = await carrtio.getById(req.params.id)        
        if (!carrito) {                       
            return res.status(404).json({msg: 'Producto no encontrado'}) // sino pongo el return no funciona           
        }
        res.status(200).json( {data: carrito})          
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})

// pedidas en el desafio

routerCarrito.post('/', async (req, res) => {
    try {
        // crear un nuevo carrtio y devolver su id
        const id = await carrtio.add({ timestamp: Date.now(), productos: [] })
        res.status(200).json({msg: 'carito creado', id})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})

routerCarrito.delete('/:id', async (req, res) => {
    try {
        await carrtio.deleteById(req.params.id)
        res.status(200).json({msg: `Carrito con id ${req.params.id} eliminado`})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})

routerCarrito.get('/:id/productos', async (req, res) => {
    try {
        const carrito = await carrtio.getById(req.params.id)
        if (!carrito) {
            return res.status(404).json({msg: 'Carrito no encontrado'})
        }
        res.status(200).json({data: carrito.productos})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})

routerCarrito.post('/:id/productos', async (req, res) => {
    try {
        const carrito = await carrtio.getById(req.params.id)
        if (!carrito) {
            return res.status(404).json({msg: 'Carrito no encontrado'})
        }
        // console.log(carrito)
        // console.log(req.body.id)
        const producto = await productosMariaDB.getProductById(req.body.id)
        if (!producto) {
            return res.status(404).json({msg: 'Producto no encontrado'})
        }
        // console.log(producto)
        carrito.productos.push(producto[0])
        await carrtio.updateById(carrito, req.params.id)
        res.status(200).json({msg: 'Producto agregado al carrito'})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})

routerCarrito.delete('/:id/productos/:idProducto', async (req, res) => {
    try {
        console.log(req.params.id)
        const carrito = await carrtio.getById(req.params.id)
        console.log(carrito)
        if (!carrito) {
            return res.status(404).json({msg: 'Carrito no encontrado'})
        }
        // const producto = await productosMariaDB.getProductById(req.params.idProducto)
        // if (!producto) {
        //     return res.status(404).json({msg: 'Producto no encontrado'})
        // }
        const index = carrito.productos.findIndex(p => p.id === parseInt(req.params.idProducto))
        if (index === -1) {
            return res.status(404).json({msg: 'Producto no encontrado en el carrito'})
        }
        carrito.productos.splice(index, 1)
        await carrtio.updateById(carrito, req.params.id)
        res.status(200).json({msg: 'Producto eliminado del carrito'})
    } catch (error) {
        res.status(400).json({msg: `Error ${error}`})
    }
})



routerCarrito.post(':id/productos')
// testing end to end

app.use('/api/carrito', routerCarrito)
/***********************************************************************************/






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