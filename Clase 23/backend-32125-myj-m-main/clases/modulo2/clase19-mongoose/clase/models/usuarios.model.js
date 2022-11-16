const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        max: 50
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
        max: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        max: 50
    },
    username: {
        type: String,
        required: true,
        trim: true,
        max: 50
    }
})

module.exports = model('Usuarios', usuarioSchema)