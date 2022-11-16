const socket = io()


let input = document.querySelector('#message')
let button = document.querySelector('#send')
console.log(input)

button.addEventListener('click', ()=>{
        console.log(input.value)
        socket.emit('cliente-mensaje', input.value)            
})

socket.on('mensajes', data => {
    console.log(data)
    let dataMensaje = data.map(men => `<li>${men.mensaje}</li>`).join(' ')  
    document.querySelector('#messages').innerHTML = dataMensaje
})