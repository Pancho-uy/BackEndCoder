const server = io()

server.on('productos', (arrayProductos) => {
    // console.log(arrayProductos)
    if (!arrayProductos.length) {
        document.getElementById('datos').innerHTML = '<h2>No hay productos cargados</h2>'
    }else{
        document.getElementById('datos').innerHTML = crearTabla(arrayProductos)
        
        // con fetch traigo el template y lo compilo con handlebars
        // crearTablaHbs(arrayProductos, html =>{
        //     document.getElementById('datos').innerHTML = html
        // })
    }

})

const crearTabla = (arrayProductos) => {
    let tabla = '<table class="table table-striped table-dark">'
    tabla += '<thead><tr><th scope="col">id</th><th scope="col">title</th><th scope="col">price</th><th scope="col">thumbnail</th></tr></thead>'
    tabla += '<tbody>'
    arrayProductos.forEach(producto => {
        tabla +=    `<tr>
                        <th scope="row">${producto.id}</th>
                            <td>${producto.title}</td>
                            <td>${producto.price}</td>
                            <td><img class="w-25" src="${producto.thumbnail}" alt="Imágen del producto"></td>
                        </tr>`
    })
    tabla += '</tbody></table>'
    return tabla
}


const getFetch = async (url, options) => {
    try {
        const resJson = await fetch(url, options)
        const data = await resJson.json()
        server.emit('update', 'ok')            
    } catch (error) {
        console.log(err)
    } finally {
        formulario.reset()
    }
}


const formulario = document.querySelector('form')
// console.log(formulario)
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(formulario)
    // console.log(data)
    const producto = {
        title: data.get('title'),
        price: data.get('price'),
        thumbnail: data.get('thumbnail')
    }
    // console.log(producto)
    // forma mas sencilla de enviar datos al servidor
    // server.emit('nuevoProducto', producto)
    // formulario.reset()


    // otra forma de enviar datos al servidor
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    }

    getFetch('/api/productos', options)
})


    async function crearTablaHbs(productos,cb) {
        try {
            let resText = await fetch('plantillas/tabla.hbs')
            let plantilla = await resText.text()
            console.log0(plantilla)
            let template = Handlebars.compile(plantilla)
            let html = template({productos})
            cb(html)
            // .then(respuesta => respuesta.text())
            // .then( plantilla => {        
            //     console.log(plantilla)        
            //     let template = Handlebars.compile(plantilla);
            //     let html = template({ productos })
            //     cb(html)
            // })
        } catch (error) {
            console.log(error)
        }
        
    }