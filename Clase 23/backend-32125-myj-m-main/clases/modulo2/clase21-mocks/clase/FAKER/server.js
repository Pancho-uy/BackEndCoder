// express
import express from 'express'
import crearArchivoPersonas from './crearArchivoFaker.js';
const app = express();
const port = 4000

app.get('/test', (req, res) => {
    crearArchivoPersonas(50)
    // console.log(__dirname)
    res.send('Archivo creado')
})

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))