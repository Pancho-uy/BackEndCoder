const socket = io()

const input = document. querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    console.log(input.value)
    socket.emit('respuesta', input.value)
})

// Escuchar el evento saludo del lado del servidor
socket.on('saludo', (data)=>{
    console.log(data)
    // enviar un evento respuesta al servidor
    socket.emit('respuesta', 'Hola desde el lado del cliente')
})

// Escuchar el evento respuesta-server del lado del servidor
socket.on('respuesta-server', (data)=>{
    const mensajes = data.map(item=> `<li>${item.mensaje}</li>` )
    const ul = document.querySelector('ul')
    ul.innerHTML = mensajes.join('')
    console.log(data)
})