// const { saludar } = require('./funcion')
// const MiClase = require('./miClase')

// import { saludar } from './funcion.js'
// import MiClase from './miClase.js'

const condition = false

if (condition) {
    const { default: MiClase } = await import('./miClase.js')
    const { saludar } = await import('./funcion.js')
    saludar()
    const saludo = new MiClase('Juan')
    console.log(saludo.saludar())
}


