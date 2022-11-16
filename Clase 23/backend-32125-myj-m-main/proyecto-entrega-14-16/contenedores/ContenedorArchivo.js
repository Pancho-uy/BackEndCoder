import  { promises as fs } from 'fs'

/* It's a class that allows you to read, write, update and delete objects from a JSON file */
/* Manipula un Objeto de tipo items, no importa su contendio */
/* crea un archivo con los items que querramos */
/** el item se crea su id, y el contendio se lo pasamos desde afuera como lo querramos */

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async getAll() {
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            return []
        }
    }

    async getById(id) {
        const objs = await this.getAll()         
        return objs.find(o => o.id == id)
    }
    
    async add(obj) {
        const objs = await this.getAll()

        let newId
        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId }
        objs.push(newObj)

        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newId
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async updateById(objeto, id) {
        const objs = await this.getAll()
        const index = objs.findIndex(o => o.id == id)
        if (index == -1) {
            throw new Error(`Error al actualizar: no se encontró el id ${id}`)
        } else {
            objs[index] = { ...objeto, id }
            try {
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            } catch (error) {
                throw new Error(`Error al borrar: ${error}`)
            }
        }
    }

    async deleteById(id) {
        const arrayCarritos = await this.getAll()
        const index = arrayCarritos.findIndex(o => o.id === parseInt(id))
        if (index == -1) {
            throw new Error(`Error al borrar: no se encontró el id ${id}`)
        }

        arrayCarritos.splice(index, 1)
        try {
            await fs.writeFile(this.ruta, JSON.stringify(arrayCarritos, null, 2))
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }
}

export default ContenedorArchivo