const http = require('http')
const moment = require('moment')

const server = http.createServer((peticion, respuesta)=>{
    //acciones 
    const hora = parseInt(moment().format('HH:mm:ss'))
    console.log(hora)
    if(hora >= 6 && hora <= 12){
        respuesta.end('<h1>Buenos dias</h1>')
    }

    respuesta.statusCode = 200
    // respuesta.setHeader('Content-Type', 'text/plain')

    // console.log(peticion)
    // respuesta.end('<h1>Hola mundo</h1>')
})


const port = 8080

const connectServer = server.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${connectServer.address().port}`)
})


// const  task = new Promise()

// Promise.resolve('hola')

// new Data() -> o usar Date