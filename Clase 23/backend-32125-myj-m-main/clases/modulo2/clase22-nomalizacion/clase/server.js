// author= [ {  } ]
const normalizr = require('normalizr')
const { schema, normalize, denormalize } = normalizr
const util = require('util')
const originalData = require('../archivos/originalData')


function print(objeto) {
    console.log(util.inspect(objeto,true,12,true))
}

// print(originalData)
// console.log(originalData)

// definiendo los esquemas

const user = new schema.Entity('users')

const comment = new schema.Entity('comments',{
    commenter: user
})

const article = new schema.Entity('articles',{
    author: user,
    comments: [ comment ]
})

const posts = new schema.Entity('posts',{
    posts: [ article ]
})


console.log(' - ------------------------ tamaño objeto original ------------------------ - ')

console.log(JSON.stringify(originalData).length)

console.log(' - ------------------------  objeto normalizado ------------------------ - ')

// normalizando el objeto original

const nomalizeOriginalData = normalize(originalData, posts)
console.log(JSON.stringify(nomalizeOriginalData).length)
print(nomalizeOriginalData)

console.log(' - ------------------------  objeto denormalizado ------------------------ - ')

// denormalizando el objeto normalizado

const denormalizeOriginalData = denormalize(nomalizeOriginalData.result, posts, nomalizeOriginalData.entities)

// console.log(denormalizeOriginalData)
console.log(JSON.stringify(denormalizeOriginalData).length)
