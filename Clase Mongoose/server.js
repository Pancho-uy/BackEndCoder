const mongoose = require('mongoose');

CRUD()

function CRUD(){
  try {
    const URL = 'mongodb://localhost:27017/ecommerce';
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Conectado a MongoDB')
  } catch (error) {
    console.log('Error en la conexión a la base de datos');
}}