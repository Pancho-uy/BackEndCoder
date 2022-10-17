// traigo modulo fs para manejo de archivos
const fs = require('fs')

// Creo la clase y la exporto

module.exports = class Contenedor {
    constructor(){
        this.products = [
                {
                  id: 1,
                  title: "Escuadra",
                  price: 111.11,
                  thumbnail:
                    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
                },
                {
                  id: 2,
                  title: "Calculadora",
                  price: 222.22,
                  thumbnail:
                    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                },
                {
                  id:3,
                  title: "Globo Terráqueo",
                  price: 333.33,
                  thumbnail:
                    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
                },
              ]
        }
    

    getAll(){
        const fileContent  = this.products
        return fileContent
    }

    getById(id){ 
        try {
            const fileContent = this.products
            const product = fileContent.find(product => product.id === id)
            return product
        } catch (error) {
            console.log(error)
        }
    }

    async save(obj){ // guarda el objeto en el archivo y devuelve el ID asignado
        let ret=0
        const fileContent  =  await this.readFile()
        const largo = fileContent.length 
        if (largo !== 0) {
            await fs.promises.writeFile(this.miArchivo,JSON.stringify([...fileContent, {id: fileContent[fileContent.length - 1].id + 1 ,...obj}], null, 2), 'utf-8')
        } else {
            await fs.promises.writeFile(this.miArchivo, JSON.stringify( [ {...obj, id: 1} ]), 'utf-8')
        }
    }

    async deleteById(id) {
        try {
            const contenido = await this.readFile();
            const copia = Array.from(contenido);
            const item = copia.findIndex(obj => obj.id === id);
            if (contenido.filter(filtrado => filtrado.id === id)) {
                copia.splice(item, 1);
                await fs.promises.writeFile(this.miArchivo, JSON.stringify(copia, null, 2), 'utf-8');
                console.log('Registro ID ',id,' eliminado con exito');
            } else {
                throw Error('ERROR !!! No se encontro el registro con ID ',id);
            }
        } catch(error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.miArchivo, JSON.stringify([], null, 2), 'utf-8');
        } catch(error) {
            console.log(error);
        }
    }
}
