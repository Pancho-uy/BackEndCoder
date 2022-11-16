const mongoose = require('mongoose')

const Usuarios = require('./models/usuarios.model')


// const CRUD = async () => {
//     const URL = 'mongodb://localhost:27017/test'
//     let rta = await mongoose.connect(URL, { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true 
//     })
//     console.log('Conectado a la base de datos')

//     // Crear un documento
//     console.log('------------------ Create ------------------')
//     const newusuario = {nombre: 'Juan', apellido: 'Perez', email: 'j@gmail.com', password: '1234', username: 'jperez'}
//     const usuario = new Usuarios(newusuario)
//     rta = await usuario.save()
//     console.log(rta)
// }

class Server {
    constructor(){
        this.connectDB()
    }

    connectDB(){
        const URL = 'mongodb://localhost:27017/test'
        mongoose.connect(URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('Conectado a la base de datos')
    }

    // async getAll(){
        
    // }

    
    // update 
    // usuarioUpdate(id, data){
    //     return Usuarios.findByIdAndUpdate(id, data)
    // }
    usuarioUpdate(){
        return Usuarios.UpdateOne({nombre: ''}, {})
    }

}


// CRUD()

const server = new Server()
