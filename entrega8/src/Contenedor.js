// Creo la clase y la exporto
const { configMaria } = require("./conectorMariaDB");
const knex = require("knex")(configMaria);
console.log("Conectado a MariaDB");
console.log(knex);
class Contenedor {
    constructor(db) {
        this.db = db;
        this.registros = 0;
    }

    TABLE_NAME = 'productos';
    ID_COLUMN = 'id';

    async save(object) {
            try {
                const newProductId = await knex.insert(object).from(this.TABLE_NAME);
                console.log(`Producto agregado con el ID: ${newProductId}.`);
                return newProductId;
            } catch (error) {
                console.log(error);
            } finally {
                knex.destroy();
            }
        }

        async deleteById(id) {
            try {
                await knex.del().from(this.TABLE_NAME).where(this.ID_COLUMN, id);
                console.log(`Producto con el ID: ${id} eliminado.`);
                return true;
            } catch (error) {
                console.log(error);
            } finally {
                knex.destroy();
            }
        }

        async getAll() {
            try {
                return await knex.select().from(this.TABLE_NAME);
            } catch (error) {
                console.log(error);
            } finally {
                knex.destroy();
            }
        }

        async getProductById(id) {
            try {
                return await knex.select().from(this.TABLE_NAME).where(this.ID_COLUMN, id);
            } catch (error) {
                console.log('Producto no encontrado');
            }
        }

        async updateProductById(object, id) {
            try {
                await knex.from(this.TABLE_NAME).update(object).where(this.ID_COLUMN, id)
                return true;
            } catch (error) {
                console.log(error);
            } finally {
                knex.destroy();
            }
        }
    }

module.exports = Contenedor;