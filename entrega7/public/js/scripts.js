const socket = io.connect();

let idCarrito= 0 //guardo el id del carrito

generaCarrito().then( (r) => idCarrito=r) //genero el carrito y guardo el id

socket.on('updateProd', () => { //escucho el evento updateProd
    console.log("cliente <-- Actualizo producto")
    console.log("Hola--> " + socket.id)
    listarProductos() 
});
socket.on('updateCarritoMostrar', () => {
    console.log("cliente <-- Muestro Carrito Actualizado")
    cargaCarrito(true) 
});
socket.on('updateCarrito', () => {
    console.log("cliente <-- Actualizo Carrito")
    cargaCarrito(false) 
});

async function buscarProductos() {
    return fetch('/api/productos')
        .then(prod => prod.json())
}

// El usuario admin se hardcodea para la entrega
/* ?user=admin*/


async function buscarProducto(id) { //busca un producto por id
    return fetch(`/api/productos/${id}?user=admin`) 
        .then(prod => prod.json())
}

async function buscarProdCarrito(idCarrito) { //busca un producto por id del carrito
    return fetch(`/api/carrito/${idCarrito}/productos?user=admin`) 
        .then(prod => prod.json())
}

async function cargaProd() { //carga el formulario para agregar un producto
    const form = document.querySelector('form');
    const data = { 
        nombre:form[0].value,
        precio: form[1].value,
        descripcion: form[2].value,
        foto: form[3].value
    };
    fetch('/api/productos?user=admin', { 
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(socket.emit('updateProd', 'Se cargo nuevo Producto!'))
        .catch(error => console.error(error))
}

async function actualizarProd(id) { //actualiza un producto por su id
    const form = document.querySelector('form');
    const data = { 
        nombre:form[0].value,
        precio: form[1].value,
        descripcion: form[2].value,
        foto: form[3].value
    };
    fetch(`/api/productos/${id}?user=admin`, {     
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        })
        .then(socket.emit('updateProd', `Se actualizo el producto id: ${id}`))
        .catch(error => console.error(error))
}

async function eliminarProd(id){ //elimina un producto por su id
    fetch(`/api/productos/${id}?user=admin`, {     
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        .then(socket.emit('updateProd', `Se elimino el producto id: ${id}`))
        .catch(error => console.error(error))
}

async function generaCarrito(){ //genera un carrito y devuelve el id
    return fetch(`/api/carrito?user=admin`, {     
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
        })
        .then( response => response.json())
        .catch(error => console.error(error))
}

async function agregarProdCarrito(id_prod){ //agrega un producto al carrito
    console.log("idCarrito en agrega: "+ idCarrito)
    const data = { producto: {id: id_prod}}
    fetch(`/api/carrito/${idCarrito}/productos?user=admin`, {     
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        })
    .then(socket.emit('updateCarrito', `Se agrego Producto id ${id_prod} al Carrito id ${idCarrito}!`))
    .catch(error => console.error(error))
}

async function eliminarProdCarrito(id_prod){ //elimina un producto del carrito
    fetch(`/api/carrito/${idCarrito}/productos/${id_prod}?user=admin`, {     
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        })
    .then(socket.emit('updateCarritoMostrar', `Se elimino Producto id ${id_prod} del Carrito id ${idCarrito}!`))
    .catch(error => console.error(error))
}

//--------------------------------------//
// Cargo las plantillas desde Handlebars//
//--------------------------------------//

async function listarProductos() { //lista los productos
    const plantillaProd = await buscarPlantillaProducto()
    const productos = await buscarProductos()
    const html = armarHTMLproductos(plantillaProd, productos)
    document.getElementById('productos').innerHTML = html
}

async function cargaPaginaProd(mostrarFormCarga) { // Muestra el formulario para agregar un producto
    const plantillaCarga = await buscarPlantillaCargaProd()
    const html = armarHTMLcarga(plantillaCarga,mostrarFormCarga)
    document.getElementById('carga').innerHTML = html
}

async function cargaActualizaProd(id,mostrarActualizarProd) { //Muestra el formulario para actualizar un producto
    const plantillaAct = await buscarPlantillaActProd()
    const prod = await buscarProducto(id)
    const html = armarHTMLactualizaProd(plantillaAct,prod,mostrarActualizarProd)
    document.getElementById('carga').innerHTML = html
}

async function cargaCarrito(mostrarCarrito) { //Muestra el carrito
    console.log("id carrito: " + idCarrito)
    const prods_carrito = await buscarProdCarrito(idCarrito)
    const plantillaCarrito = await buscarPlantillaCarrito()
    const html = armarHTMLcarrito(plantillaCarrito,prods_carrito,mostrarCarrito)
    document.getElementById('carrito').innerHTML = html
}

function buscarPlantillaProducto() { // Busco la plantilla de productos
     return fetch('/plantillas/productos.hbs')
         .then(respuesta => respuesta.text())
 }

 function buscarPlantillaCargaProd() { // Busco la plantilla de carga de productos
    return fetch('/plantillas/carga.hbs')
        .then(respuesta => respuesta.text())
}

function buscarPlantillaActProd() { // Busco la plantilla de actualizacion de productos
    return fetch('/plantillas/actualizaProd.hbs')
        .then(respuesta => respuesta.text())
}
function buscarPlantillaCarrito() { // Busco la plantilla de carrito
    return fetch('/plantillas/carrito.hbs')
        .then(respuesta => respuesta.text())
}

//-------------------------------//
// Armo los HTML con Handlebars  //
//-------------------------------//
function armarHTMLproductos(plantillaProd, productos) { // Armo el HTML del listado de productos
     const render = Handlebars.compile(plantillaProd);
     const html = render({ productos })
    return html
}

function armarHTMLcarga(plantillaCarga,mostrarFormCarga) { // Armo el HTML de carga de productos
    const render = Handlebars.compile(plantillaCarga);
    const html = render({ mostrarFormCarga })
   return html
}
function armarHTMLactualizaProd(plantillaAct,prod,mostrarActualizarProd) { // Armo el HTML de actualizacion de productos
    const render = Handlebars.compile(plantillaAct);
    const html = render({ prod,mostrarActualizarProd })
   return html
}
function armarHTMLcarrito(plantillaCarrito,prods_carrito,mostrarCarrito) { // Armo el HTML del carrito
    const render = Handlebars.compile(plantillaCarrito);
    const html = render({ prods_carrito,mostrarCarrito })
   return html
}
//--------------------------------------//