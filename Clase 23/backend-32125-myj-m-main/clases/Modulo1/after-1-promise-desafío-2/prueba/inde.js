// import  fetch  from 'node-fetch'

// const traerApi = async ()=>{
//     try{
//         const resp = await fetch('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
//         const respParseada = await resp.json()
//         console.log(respParseada.venta)
        
//     }catch(err){
//         console.log(err)
//     }
    
// }


// traerApi()
const fs = require('fs')


class Contenedor {
    constructor(rutaArchivo){
        this.rutaArchivo = rutaArchivo
        
    }

    async #leerUnArchivo(){
        try {
            const contenido = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const contenidoParseado = JSON.parse(contenido)
            // console.log(contenidoParseado)
            return contenidoParseado
        } catch (error) {
            console.log(error)
        }
        
    }
    //[0,1,2,3,9,10] // length = 6  pos ultimo = length - 1
    async save(obj){ // guarda un objeto en el archivo, devuelve el id asignado
        const contenidoArchivo =  await this.#leerUnArchivo()
        if (contenidoArchivo.length !== 0) {
            console.log(contenidoArchivo)
            await fs.promises.writeFile(this.rutaArchivo,JSON.stringify([...contenidoArchivo, {...obj, id: contenidoArchivo[contenidoArchivo.length - 1].id + 1}], null, 2), 'utf-8')
        } else {            
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify( [ {...obj, id: 1} ]), 'utf-8')
        }

    }

    async getById(id){ // busca por id y devuelve el objeto encontrado
        
    }

    async getAll(){ // devuelve un array con los objetos presentes en el archivo
        const contenidoArchivo =  await this.#leerUnArchivo()
        console.log(contenidoArchivo)
    }

}

const contenedor = new Contenedor('./productos.txt')

// contenedor.save({nombre: 'producto 1', precio: 100})

contenedor.getAll()


