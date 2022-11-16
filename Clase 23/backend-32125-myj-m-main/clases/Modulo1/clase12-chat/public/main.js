const socket = io.connect()

console.log('Hello World')

const addMessage = (e) => {
    const texto = document.querySelector('#texto').value
    const username = document.querySelector('#username').value
    console.log(texto)
    console.log(username)
    
    socket.emit('new-message', {text: texto,author: username})
    return false
}


const render = (arraMensajes) => {
    const html = arraMensajes.map((elem) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.querySelector('#messages').innerHTML = html;
}

socket.on('mensajes', (data)=>{
    console.log('Se recibieron los mensajes')
    console.log(data)
    render(data)
})