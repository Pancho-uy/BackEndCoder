// express
const express = require('express');
const app = express();
const port = 4000

// const personas = [ 
//     { nombre: 'Juan',  edad: 20, color: 'rojo'}, 
//     { nombre: 'Pedro', edad: 30, color: 'verde'}, 
//     { nombre: 'Maria', edad: 40, color: 'azul'},
//     { nombre: 'Jose',  edad: 50, color: 'amarillo'},
//     { nombre: 'Luis',  edad: 60, color: 'verde'},
//     { nombre: 'Ana',   edad: 70, color: 'naranja'},
//     { nombre: 'Luisa', edad: 80, color: 'marrón'},
//     { nombre: 'Rosa',  edad: 90, color: 'celeste'}
// ]

const nombres = ['Juan','Pedro','Maria','Jose','Luis','Ana', 'Luisa','Rosa', 'Fede', 'Leandro']
const aplellidos = ['Perez','Gomez','Lopez','Martinez','Gonzalez','Rodriguez','Fernandez','Diaz', 'Gimenez', 'Garcia']
const colores = ['rojo','verde','azul','amarillo','verde','naranja','marrón','celeste', 'rosa', 'violeta']

app.get('/test', (req, res) => {
    let personas = []
    for (let i = 0; i < 10; i++) { 
        personas.push({
            nombre: nombres[Math.floor(Math.random() * nombres.length)],
            apellido: aplellidos[Math.floor(Math.random() * aplellidos.length)],
            color: colores[Math.floor(Math.random() * colores.length)]
        })
    }
    res.send(personas)
})

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))