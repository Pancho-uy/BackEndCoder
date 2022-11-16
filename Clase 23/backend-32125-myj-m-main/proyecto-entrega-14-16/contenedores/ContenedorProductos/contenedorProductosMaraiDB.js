// import { dbConnection } from '../../database/config.js'
import knex from 'knex'

class ContenedorProductosMariaDB {
    constructor(configConnection, tabla) {
        // this.connection()
        this.knex = knex(configConnection)
        this.tabla = tabla
    }
    
    async getProducts() {
        try {            
            return await this.knex.from(this.tabla).select('*')           
        }catch(error) {
            return new Error(`Error ${error}`)    
        }
        
        // return [{id: 1, title: 'producto 1', price: 100, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Camiseta-negra.jpg'}, {id: 2, title: 'producto 2', price: 200, thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Camiseta-negra.jpg'}] 
    }
    
    async getProductById(id) {
        try {
            return await this.knex.from(this.tabla).select('*').where('id', '=', parseInt(id))             
        } catch (error) {
            return new Error(`Error ${error}`)    
        } 
    }
    
    //add product and create id with timestamp
    
    async addProduct(producto) {
        try {
            return await this.knex(this.tabla).insert(producto)                             
        } catch (error) {
            return new Error(`Error ${error}`)    
        }
    }
    
    async updateProduct(id, producto) {
        try {
            return await this.knex(this.tabla).where('id', '=', parseInt(id)).update(producto)            
        } catch (error) {
            return new Error(`Error ${error}`)
        }        
    }
    
    async deleteProduct(id) {
        try {
            await this.knex(this.tabla).where('id', '=', parseInt(id)).del()
        } catch (error) {
            return new Error(`Error ${error}`)
        }
    }

    // delte all products
    deleteAllProducts() {
        try {
            return this.knex(this.tabla).del()
        } catch (error) {
            return new Error(`Error ${error}`)           
        }
    }

}

export default ContenedorProductosMariaDB;
