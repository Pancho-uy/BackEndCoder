// const suma = function( a, b){
//     return a + b
// }
// const suma1 = (a, b) =>  (a + b)/2

// const suma2 = b => {
//     let a = 1
//     return a + b
// }
// const suma3 = _ => {
//     let a = 1
//     let b = 2
//     return a + b
// }

// console.log( suma3() )



// *****************************************************************************************
const sumar = (a,b) => a + b
let a= 46
let b = 54
const suma= sumar(a,b)
// const suma= sumar

console.log(`La suma de a: ${a}, mas b: ${b}. Da como resultado: ${suma}  `)

//*************************************************************************************************
const sumar2 = (a,b) => {
    // let suma = a+b
    return a + b
}
const suma2= sumar2(a,b)
console.log(`La suma de a: ${a}, mas b: ${b}. Da como resultado: ${suma2}  `)
//-------------------------------------------------------------------------------------------------

const dobeDe = a => a * 2
console.log(`el doble de a: ${a} es ${dobeDe(a)} `)
//-------------------------------------------------------------------------------------------------

const getPersona = _ =>  ( { nombre: 'juan', edad: 30 }) 

console.log(getPersona())