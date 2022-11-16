module.exports = function escribirArchivo(texto, callback) {
    console.log(texto)
    setTimeout(()=>{
        callback()
    }, 10000)
}