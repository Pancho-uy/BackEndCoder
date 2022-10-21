// Creo DB "ecommerce"
use ecommerce
// Creo colección "productos"
db.createCollection("productos")
// Creo colección "mensajes"
db.createCollection("mensajes")
// Agrego 10 productos
db.productos.insertMany([