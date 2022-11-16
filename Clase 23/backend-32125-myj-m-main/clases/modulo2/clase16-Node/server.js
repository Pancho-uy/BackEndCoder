const { option } = require('./config')

const knex = require('knex')(option.sqlite)

// knex.schema.createTable('automoviles', table => {
//     table.increments('id')
//     table.string('marca')
//     table.string('modelo')
//     table.integer('anio')
// } )
// .then(() => console.log('Tabla creada'))
// .catch((err) => { console.log(err); throw err })
// .finally(() => knex.destroy())

// insertar un registro

// array de automoviles
const autos = [
    { marca: 'Ford', modelo: 'Fiesta', anio: 2019 },
    { marca: 'Ford', modelo: 'Focus', anio: 2018 },
    { marca: 'Ford', modelo: 'Ka', anio: 2017 },
    { marca: 'Ford', modelo: 'Fusion', anio: 2016 },
    { marca: 'Ford', modelo: 'Mustang', anio: 2015 },
    { marca: 'Ford', modelo: 'Ranger', anio: 2014 }
]


// knex('automoviles').insert(autos)
// .then(() => console.log('Registros insertados'))
// .catch((err) => { console.log(err); throw err })
// .finally(() => knex.destroy())

// const insertProducto = (producto) => {
//     knex('productos').insert(producto)
//         .then(() => console.log('Registro insertado'))
//         .catch((err) => { console.log(err); throw err })
//         .finally(() => knex.destroy())
// }

// knex('automoviles').select('*') /// select * from automoviles
// .then((data) => console.log(data))
// .catch((err) => { console.log(err); throw err })
// .finally(() => knex.destroy())

// select * from productos where nombre = ''
//

knex.from('automoviles').select('modelo', 'anio').where('anio','>' , 2017).andWhere('modelo', 'Focus')
.then((data) => console.log(data))
.catch((err) => { console.log(err); throw err })
.finally(() => knex.destroy())

/// [abcd][@]

// knex.from('automoviles').select('modelo', 'anio').where('anio','>' , 2018).orderBy('anio', 'desc')
// .then((data) => console.log(data))
// .catch((err) => { console.log(err); throw err })
// .finally(() => knex.destroy())


// update
// knex('automoviles').where('modelo', 'Fiesta').update({ anio: 2023 })
//     .then(() => console.log('Registro actualizado'))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => knex.destroy())


// delete
// knex('automoviles').del()
//     .then(() => console.log('Registro eliminado'))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => knex.destroy())
// knex('automoviles').where('modelo', 'Fiesta').del()
//     .then(() => console.log('Registro eliminado'))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => knex.destroy())

// async function batch(){
//     try {

//         const productos = await knex('automoviles').insert(autos)
//         console.log(productos)

//         const data = await knex.from('automoviles').select('modelo', 'anio').where('anio','>' , 2018).orderBy('anio', 'desc')
//         console.log(data)

//         // lerr todos
//         const todos = await knex.from('automoviles').select('*')
//         console.log(todos)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         knex.destroy()
//     }
// }

// batch()