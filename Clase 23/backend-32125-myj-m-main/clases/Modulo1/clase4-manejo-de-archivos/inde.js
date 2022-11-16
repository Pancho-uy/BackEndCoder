const fs = require('fs')

// console.log(fs)

// funcionalidades de fs sincrónicas

// fs.writeFileSync('./data.txt', 'hola conteenido \n', 'utf-8' )

// fs.appendFileSync('./data.txt', 'hola  agregado \n', 'utf-8' )

// try {
//     // data
//     const data = fs.readFileSync('./data.txt', 'utf8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// fs.unlinkSync('./data.txt')

// funcionalidades de fs asincrónicas con callbacks /////////////////////


// fs.writeFile('./data.txt', 'creando conteenido y archivo \n', 'utf-8' ,(err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('archivo creado')
//     }
// })

// fs.appendFile('data.txt', 'Agregado de contendio', 'utf-8', err => {
//     if(err){
//         console.log(err)   
//     }else{
//         console.log('contenido agregado')
//     }
// })


// fs.readFile('./data.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.unlink('./data.txt', err => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('archivo eliminado')
//     }
// })

// fs.mkdir('./acavadata', err => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('carpeta creada')
//     }
// })

// fs.readdir('./acavadata', (err, contenidoArchivo)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(contenidoArchivo)
//     }
// })

// manejo de archivos con promesas /////////////////////////////////




const leerArchivo = async () => { 

    // fs.promises.readFile('./data.txt', 'utf8')
    // .then(contenidoArchivo => console.log(contenidoArchivo))
    // .catch(err => console.log(err))

    // try {
    //     await fs.promises.writeFile('./data.txt', 'Creando contenido', 'utf-8')
    //     console.log('archivo creado')
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     await fs.promises.appendFile('./data.txt', 'Agregando contenido', 'utf-8')
    //     console.log('archivo agregado')
    // } catch (error) {
    //     console.log(error)
    // }



    // try {
    //     const contenidoArchivo = await fs.promises.readFile('./data.txt', 'utf-8') 
    //     console.log(JSON.parse(contenidoArchivo))   
    // } catch (error) {
    //     console.log(error)
    // }
    try {
        await fs.promises.rename('./data.txt', './nuevo-nombre-archivo.txt')
    } catch (error) {
        console.log(error)
    }


}

leerArchivo()


