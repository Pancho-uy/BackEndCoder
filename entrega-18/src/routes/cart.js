import express from "express";
import { CarritoDao } from "../dao/CarritoDao.js";
import { ProductoDao } from "../dao/ProductoDao.js";
import logger from "../loggers/Log4jsLogger.js";

const router = express.Router();
const carritoDao = new CarritoDao();

// Endpoints

// POST /api/carrito
router.post('/', async (_req, res) => {
    const newCart = await carritoDao.createCart();
    newCart
        ? res.status(200).json({"success": "Producto agregado con la ID " + newCart._id})
        : res.status(500).json({"error": "Hubo un error al agregar el producto"})

})

// DELETE /api/carrito/id
router.delete('/:id', async(req,res) => {
    const { id } = req.params;
    const wasDeleted = await carritoDao.deleteCartById(id);
    
    wasDeleted 
        ? res.status(200).json({"success": "Carrito removido con exito"})
        : res.status(404).json({"error": "Carrito no encontrado"})
     
})

// POST /api/carrito/:id/productos
router.post('/:id/productos', async(req,res) => {
    const { id } = req.params;
    const { body } = req;
    
    const productExists = await ProductoDao.exists(body.productId);
    
    if(productExists) {
        await carritoDao.saveProductToCart(id, body)
    } else {
        res.status(404).json({"error": "Producto no encontrado"});
    }
    
}) 

// GET /api/carrito/:id/productos
router.get('/productos/:id', async(req,res)=>{
    const { id } = req.params;
    
    const cartProducts = await carritoDao.getAllProductsFromCart(id);
    
    cartProducts
        ? res.status(200).json(cartProducts)
        : res.status(404).json({"error": "Carrito no encontrado"})
})

// DELETE /api/carrito/:id/productos/:id_prod
router.delete('/:id/productos/:id_prod', async(req, res) => {
    const {id, id_prod } = req.params;
    
    const wasDeleted = await carritoDao.deleteProductFromCart(id, id_prod);
    
    wasDeleted 
        ? res.status(200).json({"success": "el producto fue removido del carrito"})
        : res.status(400).json({"error": "hubo un problema al remover el producto del carrito"})
    
})

export default router;