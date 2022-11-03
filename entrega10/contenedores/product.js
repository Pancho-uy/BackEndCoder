const mongoose = require("mongoose");
const Product = require("../models/Product");
const config = require("../config");
const { v4: uuid4 } = require("uuid");
const Check = require("../shared/firebaseCheck");
const db = require("../config/index");
mongoose.connect(config.mongodb.cnxStr);

const productos = db.collection("productos");
class Producto {
  async createProduct(productBody, op) {
    if (op === "firebase") {
      if (Check(productBody) === true) {
        let doc = productos.doc(`${uuid4()}`);
        await doc.create({
          nombre: productBody.name,
          descripcion: productBody.description,
          stock: productBody.stock,
          precio: productBody.price,
        });
        return "Documento creado en Firebase!";
      } else {
        return "Por favor use nombre, descripcion, precio y stock";
      }
    } else {
      const product = await Product.create(productBody);
      return product;
    }
  }

  async getAll(op) {
    if (op === "firebase") {
      const info = (await productos.get()).docs;
      const response = info.map((item) => {
        return {
          id: item.id,
          nombre: item.data().nombre,
          descripcion: item.data().descripcion,
          stock: item.data().stock,
          precio: item.data().precio,
        };
      });
      return response;
    } else {
      const products = await Product.find({});
      return products;
    }
  }
  async findOne(id, op) {
    if (op === "firebase") {
      const request = productos.doc(id);
      const item = (await request.get()).data();
      if (!item) {
        return "Producto no encontrado";
      }
      return item;
    } else {
      const product = await Product.findById(id);
      if (!product) {
        return "Producto no encontrado";
      }
      return product;
    }
  }
  async deleteById(id, op) {
    if (op === "firebase") {
      const request = await productos.doc(id).delete();
      if (!request) {
        return "Producto no encontrado";
      }
      return "el producto fue eliminado!";
    } else {
      const product = await Product.findById(id);
      if (!product) {
        return "Producto no encontrado";
      }
      await product.remove();
      return "Producto eliminado con exito!";
    }
  }
  async updateById(id, data, op) {
    if (op === "firebase") {
      await productos.doc(id).update(data);
      return "Su producto fue actualizado con exito!";
    } else {
      const product = await Product.findById(id);
      if (!product) {
        return "Producto no encontrado";
      }
      Object.assign(product, data);
      await product.save();
      return product;
    }
  }
}
module.exports = Producto;
