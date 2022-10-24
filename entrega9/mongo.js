// Creo DB 'ecommerce'
use ('ecommerce');
// Creo colección 'productos'
db.createCollection('productos')
// Creo colección 'mensajes'
db.createCollection('mensajes')
// Agrego 10 productos
db.productos.insertMany([{'id':1,'title':'Router','price':3821,'thumbnail':'http://dummyimage.com/246x100.png/dddddd/000000'},
{'id':2,'title':'Router','price':1160,'thumbnail':'http://dummyimage.com/220x100.png/dddddd/000000'},
{'id':3,'title':'AP 5Ghz','price':4341,'thumbnail':'http://dummyimage.com/192x100.png/5fa2dd/ffffff'},
{'id':4,'title':'Switch','price':604,'thumbnail':'http://dummyimage.com/166x100.png/ff4444/ffffff'},
{'id':5,'title':'Router','price':2991,'thumbnail':'http://dummyimage.com/122x100.png/dddddd/000000'},
{'id':6,'title':'Meraki','price':4796,'thumbnail':'http://dummyimage.com/247x100.png/ff4444/ffffff'},
{'id':7,'title':'Router','price':3177,'thumbnail':'http://dummyimage.com/227x100.png/ff4444/ffffff'},
{'id':8,'title':'Repeater','price':656,'thumbnail':'http://dummyimage.com/248x100.png/dddddd/000000'},
{'id':9,'title':'AP 5Ghz','price':3899,'thumbnail':'http://dummyimage.com/143x100.png/cc0000/ffffff'},
{'id':10,'title':'Switch','price':1250,'thumbnail':'http://dummyimage.com/225x100.png/cc0000/ffffff'}])
// Agrego 10 mensajes
db.mensajes.insertMany([{'email':'pfranzotto0@google.fr','mensaje':'heuristic'},
{'email':'pmaccaig1@wikipedia.org','mensaje':'Persevering'},
{'email':'ktampion2@un.org','mensaje':'Synergistic'},
{'email':'ssudron3@jigsy.com','mensaje':'fresh-thinking'},
{'email':'wwreford4@slate.com','mensaje':'Right-sized'},
{'email':'skemmet5@npr.org','mensaje':'fresh-thinking'},
{'email':'ppaulou6@cdbaby.com','mensaje':'Balanced'},
{'email':'mfreezer7@ow.ly','mensaje':'Innovative'},
{'email':'ycasero8@google.it','mensaje':'zero tolerance'},
{'email':'sdedden9@washington.edu','mensaje':'support'}])
//
// Consulto todos los productos
db.productos.find()
// Consulto todos los mensajes
db.mensajes.find()
//
// Muestro cantidad de documentos en colección 'productos'
db.productos.countDocuments()
// Muestro cantidad de documentos en colección 'mensajes'
db.mensajes.countDocuments()
// inserto un producto
db.productos.insertOne({'id':11,'title':'Servidor','price':4899,'thumbnail':'http://dummyimage.com/143x100.png/cc0000/ffffff'})
//
//
// Muestro productos con precio menor a 1000
db.productos.find({'price':{$lt:1000}})
// Muestro productos con precio entre 1000 y 3000
db.productos.find({price:{$gt:1000,$lt:3000}})
// Muestro produtos con precio mayor a 3000
db.productos.find({'price':{$gt:3000}})
//
// Tercer producto más barato
db.productos.find().sort({price:1}).limit(1)
// Agrego campo stock a todos los productos
db.productos.updateMany({},{$set:{'stock':100}})
// Pongo Stock en 0 a todos los productos con precio mayor a 4000
db.productos.updateMany({price:{$gt:4000}},{$set:{'stock':0}})
//Borro todos los productos con precio menor a 1000
db.productos.deleteMany({price:{$lt:1000}})
//
//
//Creo usuario PEPE con contraseña asd456 solo lectura en la colección productos
  use ('ecommerce')
  db.createUser({user:'pepe',pwd:'asd456',roles:[{role:'read',db:'ecommerce',collection:'productos'}]})

  // Papra probar el usuario PEPE
  use ('ecommerce')
  db.auth("pepe", "asd456")
  // Listo productos
  db.productos.find() // Deberia de permitirme listar los productos
  // Intento insertar un producto
  db.productos.insertOne({'id':12,'title':'Servidor','price':5000,'thumbnail':'http://dummyimage.com/143x100.png/cc0000/ffffff'}) // Deberia de fallar
  // Intento borrar un producto
  db.productos.deleteOne({'id':12}) // Deberia de fallar
  // Intento actualizar un producto
  db.productos.updateOne({'id':12},{$set:{'stock':0}}) // Deberia de fallar
  // Intento listar mensajes  
  db.mensajes.find() // Deberia de fallar


