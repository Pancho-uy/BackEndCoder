import express from 'express'

import Perimetro from '../models/Perimetro'
import Superficie from '../models/Superficie'

const app = express()
const perimetro : Perimetro = new Perimetro()
const superficie : Superficie = new Superficie()

app.get('/perimetro/:figura/:param1/:param2?', (req, res) => {
    const {figura, param1, param2} = req.params
    let resultado

    switch (figura) {
        case 'cuadrado':
            resultado = perimetro.cuadrado(Number(param1))
            break;
    
        case 'rectangulo':
            resultado = perimetro.rectangulo(Number(param1), Number(param2))
            break;
    
        case 'circulo':
            resultado = perimetro.circulo(Number(param1))
            break;       
    }

    res.send({
        calculo: 'perimetro',
        param1,
        param2,
        resultado
    })
})

app.get('/superficie/:figura/:param1/:param2?', (req, res) => {
    const {figura, param1, param2} = req.params
    let resultado

    switch (figura) {
        case 'cuadrado':
            resultado = superficie.cuadrado(Number(param1))
            break;
    
        case 'rectangulo':
            resultado = superficie.rectangulo(Number(param1), Number(param2))
    
        case 'circulo':
            resultado = superficie.circulo(Number(param1))
            break;       
    }

    res.send({
        calculo: 'superficie',
        param1,
        param2,
        resultado
    })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
