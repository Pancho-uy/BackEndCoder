// console.log('fede')


// function getNombre(nombre, apellido) {
//     return `Mi nombre es ${nombre} ${apellido}`
// }

// const saludar = (nombre, apellido, getNombre) => {
//     getNombre(nombre, apellido)   
// }

// saludar('')

const ejecutar = (nombre, unaFuncion) => {
    // acciones
    return unaFuncion(nombre)
}

const saludar = (nombre) => console.log(nombre)


// ejecutar( 'Fede', saludar )


// ejemplo de callback


// function escribirYLoguear(texto, callbackParaLoguear) {
//     // simulamos que escribimos en un archivo!
//     console.log(texto)    
//     // al finalizar, ejecutamos el callback
//     callbackParaLoguear('archivo escrito con éxito')
    
// }
//     // callback para loguear
//     const funcParametro = (mensajeParaLoguear) => {
//         const fecha = new Date().toLocaleDateString()

//         console.log(`${fecha}: ${mensajeParaLoguear}`)
//     }


// //     // texto a escribir
//     const texto = 'hola mundo de los callbacks alsdjflasdjf lasjd flasdjf lñakjsdf asdlfjsa!'
   
//    escribirYLoguear(texto , funcParametro )



const operacion = (numero1, numero2 ,callback) => {    
    return callback(numero1, numero2)
}

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2



console.log(operacion(2, 3, suma))
console.log(operacion(2, 3, resta))
console.log(operacion(2, 3, multiplicacion))
console.log(operacion(2, 0, div))
