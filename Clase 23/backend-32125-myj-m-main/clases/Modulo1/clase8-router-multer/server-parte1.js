// 'localhost:4000/api/usuarios -> /' -> Get
// 'localhost:4000/api/usuarios   -> /:id' -> Get
// 'localhost:4000/api/usuarios   /' -> post (body)
// 'localhost:4000/api/usuarios   /:id' -> Put (body)
// 'localhost:4000/api/usuarios    /id' -> Delete 

const express = require('express')
const { Router } = express
const cookieParser = require('cookie-parser')

const app = express()
const router = Router()



// const { json } = express
// import express, {json} from 'express'

app.use(express.json())
app.use('/static', express.static(__dirname + '/public'))
app.use(cookieParser())
// C:\Users\PC\Documents\Coder\comisiones\Agosto\backend-32125-myj-m\clases\Modulo1\clase8-router-multer/public

///////////////////////////// usuarios ////////////////////////////

router.get('/', (req, res) => {
    // console.log(__dirname)
    console.log(req.id)
    res.send('get usuarios')
})

router.post('/', (req, res) => {
    res.json('post usuarios')
})

///////////////////////////// carrito ////////////////////////////



///////////////////////////// declar una funcion middle ////////////////////////////

const middle = (req, res, next) => {
    console.log(req)
    req.id = 1
    console.log('soy un middleware de ruta')
    res.send('no tiene sus validaciones')
    next()
}

/////////////////////////////////////////////////////////////////////////////////
app.use((req, res, next)=>{
    
    console.log('middleware ejecutado')
    next()
})
app.use((err, req, res, next)=>{
    
    console.log(err.stack)
    res.status(500).send('algo se rompio')
    // next()
})


app.use('/api/usuarios', middle, router)

app.get('/api/carrito', (req, res) => {
    res.send('Hello Carrito')
})

// listen to port 4000
const server= app.listen(4000, () => {
    console.log(`Server on port ${server.address().port}`)
})


