// const accion = (num) => {

//     return new Promise((resolve, reject) => {
//         // acciones a realizar preste plata
//         resolve(num)
//         // reject('Nunca mas veo la plata que preste')
//     })
// } 


// accion(3)
// .then(resp => {
//     return resp + 2
// })
// .then(resp => resp / 3)
// .catch(err => console.log(err))
// .then(resp => console.log(resp))

// console.log(accion)


// function dividir(dividendo, divisor) {
//     return new Promise((resolve, reject) => {
//       if (divisor == 0) {
//         reject('no se puede dividir por cero')
//       } else {
//         resolve(dividendo / divisor)
//       }
//     })
//    }


// dividir(10, 1)
//  .then(resultado => {
//    console.log(`resultado: ${resultado}`)
//  })
//  .catch(error => {
//    console.log(`error: ${error}`)
//  })

// Promise.resolve(20)
// .then( x => x + 1 )
// .then( x => x * 2 )
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( console.log )
// .catch( console.log )


// Promise.resolve(10)
// .then( x => x + 1 )
// .then( x => x * 2 )
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( console.log )
// .catch( console.log )

// Promise.reject(30)
// .then( x => x + 1 )
// .then( x => x * 2 )
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30 )
// .then( x => x / 2 )
// .then( console.log )
// .catch( console.log )

   
   