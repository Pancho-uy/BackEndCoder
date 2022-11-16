// setTimeout(()=>{
//     // acciones
// }, 2000);

// setInterval(()=>{
//     console.log('Hola mundo')
// }, 2000)
// console.log('1')
// console.log('2')
//                                                     setTimeout(()=>{
//                                                         console.log('3')
//                                                     })
// // console.log('3')
// console.log('4')



// const delay = ret => {for(let i=0; i<ret*3e6; i++);}

// function hacerTarea(num) {
//     console.log('haciendo tarea ' + num)
//     delay(1000)
// }

// console.log('inicio de tareas');
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// console.log('fin de tareas')
// console.log('otras tareas ...')



//////////////////////////  2.1.2  //////////////////////////
function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num)
    setTimeout(cb,1000)
}

console.log('inicio de tareas')
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')