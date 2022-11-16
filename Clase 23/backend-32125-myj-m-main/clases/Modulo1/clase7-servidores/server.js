const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let arrayMsg = [{id: 1, msg: "Hello World"}, {  id: 2, msg: "Hello World 2"}, {  id: 3, msg: "Hello World 3"}] 

app.get('/api/mensajes', (req, res)=>{
    console.log(req.query)
    const {nombre, apellido, dni} = req.query

    if (nombre && apellido && dni){
        res.status(200).json({
            mensaje: `Hola ${nombre} ${apellido} con DNI: ${dni}`
        })
    }  

    res.status(400).json({
        mensaje: 'no hay usuarios',
        
    })
})

app.get('/api/mensajes/:id', (req, res)=>{    

    const { id } = req.params
    console.log(id)
    if (id){
        let msg = arrayMsg.find(mensaje => mensaje.id === parseInt(id))
        //
        res.status(200).json({
            // : 'Mensaje encontrado',
            msg
        })
    }  

    res.status(400).json({
        mensaje: 'no hay usuarios',
        
    })
})

app.post('/api/mensajes',(req, res)=>{
    console.log(req.body)
    const {nombre, email, pass} = req.body
    res.json({
        mensaje: 'Mensaje POST recibido',
        nombre,
        email,
        pass
    })
})

app.put('/api/mensajes/:id',(req, res)=>{
    console.log(req.body)
    console.log(req.params.id)
    
    // 

    res.json({
        mensaje: 'Mensaje PUT recibido'        
    })
})

app.get('/', (req, res)=>{
    res.status(200).json({mensaje: 'hola Raiz'})
})

// listen on port 4000

app.delete('/api/mensajes/:id',(req, res)=>{
    // console.log(req.body)
    console.log(req.params.id)
    
    // logica para eliminar el mensaje

    res.json({
        mensaje: 'Mensaje DELETE recibido'        
    })
})


app.listen(8080, err => {
    if (err) console.log(err)
    console.log('listening on port 4000')
})

// Dada la siguiente constante: const frase = 'Hola mundo cómo están'
// Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
// 2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
// 3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.






// app.get("/api/frase", (req, res) => {
//     res.status(200).json({ frase: `${frase}` });
//   });
  
//   app.get("/api/letras/:num", (req, res) => {
//     const { num } = req.params;
//     res.status(200).json({ letra: `${frase[num]}` });
//   });
  
//   app.get("/api/palabras/:num", (req, res) => {
//     const { num } = req.params;
//     frase2 = frase.split(" ");
//     res.status(200).json({ palabra: `${frase2[num]}` });
//   });
//   // Lautaro
//   app.get("/api/letras/:num", (req, res) => {
//     fraseArray = frase.split("");
//     const {num} = req.params
    
//     res.status(200).json({letra: fraseArray[num]})
// })




















// locahost:4000/api/usuarios - GET - Obtener todos los usuarios
// locahost:4000/api/usuarios/:id - GET - Obtener todos los usuarios
// locahost:4000/api/usuarios/:id - PUT - Obtener todos los usuarios -> bodoy
// locahost:4000/api/usuarios/:id - DELETE - 
// locahost:4000/api/usuarios - POST - Crear un usuario -> body


// locahost:4000/api/carrito
// locahost:4000/api/carrito/:id
// locahost:4000/api/carrito/:id
// locahost:4000/api/carrito/:id

