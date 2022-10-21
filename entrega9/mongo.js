// Creo DB "ecommerce"
use ecommerce
// Creo colección "productos"
db.createCollection("productos")
// Creo colección "mensajes"
db.createCollection("mensajes")
// Agrego 10 productos
db.productos.insertMany([{"id":1,"title":"Honda","price":3821,"thumbnail":"http://dummyimage.com/246x100.png/dddddd/000000"},
{"id":2,"title":"BMW","price":1160,"thumbnail":"http://dummyimage.com/220x100.png/dddddd/000000"},
{"id":3,"title":"Honda","price":4341,"thumbnail":"http://dummyimage.com/192x100.png/5fa2dd/ffffff"},
{"id":4,"title":"Chrysler","price":604,"thumbnail":"http://dummyimage.com/166x100.png/ff4444/ffffff"},
{"id":5,"title":"Chevrolet","price":2991,"thumbnail":"http://dummyimage.com/122x100.png/dddddd/000000"},
{"id":6,"title":"Subaru","price":4796,"thumbnail":"http://dummyimage.com/247x100.png/ff4444/ffffff"},
{"id":7,"title":"Acura","price":3177,"thumbnail":"http://dummyimage.com/227x100.png/ff4444/ffffff"},
{"id":8,"title":"Volkswagen","price":656,"thumbnail":"http://dummyimage.com/248x100.png/dddddd/000000"},
{"id":9,"title":"Toyota","price":3899,"thumbnail":"http://dummyimage.com/143x100.png/cc0000/ffffff"},
{"id":10,"title":"Lotus","price":1250,"thumbnail":"http://dummyimage.com/225x100.png/cc0000/ffffff"}])
// Agrego 10 mensajes
db.mensajes.insertMany([{"email":"pfranzotto0@google.fr","mensaje":"heuristic"},
{"email":"pmaccaig1@wikipedia.org","mensaje":"Persevering"},
{"email":"ktampion2@un.org","mensaje":"Synergistic"},
{"email":"ssudron3@jigsy.com","mensaje":"fresh-thinking"},
{"email":"wwreford4@slate.com","mensaje":"Right-sized"},
{"email":"skemmet5@npr.org","mensaje":"fresh-thinking"},
{"email":"ppaulou6@cdbaby.com","mensaje":"Balanced"},
{"email":"mfreezer7@ow.ly","mensaje":"Innovative"},
{"email":"ycasero8@google.it","mensaje":"zero tolerance"},
{"email":"sdedden9@washington.edu","mensaje":"support"}])
// Consulto todos los productos
db.productos.find()
// Consulto todos los mensajes
db.mensajes.find()
// Muestro cantidad de dcoumentos en colección "productos"
db.productos.count()
// Muestro cantidad de dcoumentos en colección "mensajes"
db.mensajes.count()