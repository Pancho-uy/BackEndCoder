const express = require('express')
const {saludar} = require('./ej.js')
const app = express()

let count = 0

app.get('/',(req, res)=>{
    saludar('Fede te amo')
    res.send('<h1 style="color: blue;" >Hello World</h1>')
})
app.get('/visitas', (req, res)=>{
    count++
    
    res.send({mensaje: 'Hola mundo', count})
})

app.get('/fyh',()=>{})

const PORT = 4000 

const server = app.listen(PORT, ()=>{
    // if(err) console.log(err)
    console.log(`Listening on port ${server.address().port}`)
})

server.on('error', (err)=> console.error(err))
