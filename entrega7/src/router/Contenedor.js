const fs = require("fs");
class Contenedor {
  constructor(path) {
    this.path = path;
    this.encoding = "utf-8";
    this.productos = [];
  }

  async save(producto) {
    try {
      let productos = await this.getAll();
      const array = productos.map((x) => x.id);
      if (array.length == 0) {
        producto.id = 1;
      } else {
        producto.id = Math.max(...array) + 1;
      }
      productos.push(producto);
      productos = JSON.stringify(productos, null, 2);
      await fs.promises.writeFile(this.path, productos);
      return producto.id;
    } catch (error) {
      this.MuestroError(error, "save");
    }
  }

  async getAll() {
    try {
      let contenido = await fs.readFileSync(this.path, this.encoding);
      if (contenido == "") {
        return [];
      }
      const array = JSON.parse(contenido);
      return array;
    } catch (error) {
      this.MuestroError(error, "getAll");
      return [];
    }
  }

  async getById(number) {
    try {
      const a = await this.getAll();
      let filtrado = a.filter((a) => a.id == number);
      if (!filtrado) filtrado = null;
      return filtrado;
    } catch (error) {
      this.MuestroError(error, "getById");
      return "Error al traer el id: " + number;
    }
  }

  async deleteById(number) {
    try {
      const a = await this.getAll();
      let b = a.filter((a) => a.id != number);
      if (b.length == 0) await fs.promises.writeFile(this.path, "");
      else {
        b = JSON.stringify(b, null, 2);
        await fs.promises.writeFile(this.path, b);
      }
      console.log(`id: ${number} eliminado con exito`);
    } catch (error) {
      this.MuestroError(error, "deleteById");
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.path, "");
      console.log("Borrado de la DB");
    } catch (error) {
      this.MuestroError(error, "deleteAll");
    }
  }

  MuestroError(error, fnName) {
    console.log(`ATENCION: Error en funcion ${fnName}: ${error}`);
  }
}

module.exports = Contenedor;