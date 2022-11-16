
let admin = require("firebase-admin");

let serviceAccount = require("./comision32125-firebase-adminsdk-2l4lr-b81c543551.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


CRUD()

async function CRUD(){
    const db = admin.firestore()
    const query = db.collection('usuarios')


    // try {
    //     /// create 
    //     let id = '2'
    //     const doc = query.doc(`${id}`)
    //     await doc.create({
    //         nombre: 'Juan',
    //         apellido: 'Perez',
    //         edad: 30,
    //         email: 'j@gmail.com'
    //     })
    // } catch (error) {
    //     console.log(error)
    // }


    // try {
    //     /// leer por id 
    //     const queryUsuarios = await query.get()
    //     // let docs = queryUsuarios.docs

    //     const respuesta = queryUsuarios.docs.map(documentos => ({ id: documentos.id, ...documentos.data() }) ) // []

    //     console.log(respuesta) // resp.docs.map(doc => doc.data())
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     /// leer por id 
    //     let id = '2'
    //     const queryUsuario = query.doc(`${id}`)
    //     const item = await queryUsuario.get()
    //     const respuesta = {id: item.id, ...item.data()}

    //     // const respuesta = queryUsuarios.docs.map(documentos => ({ id: documentos.id, ...documentos.data() }) ) // []

    //     console.log(respuesta) // resp.docs.map(doc => doc.data())
    // } catch (error) {
    //     console.log(error)
    // }

    
    // try {
    //     const id = '1'
    //     const doc = query.doc(id)
    //     const item = await doc.update({
    //         nombre: 'Fede',
    //         apellido: 'Osandon',
    //         email: 'f@gmail.com'
    //     })
    //     console.log(`Item actualizado: ${item}`)
    // } catch (error) {
    //     console.log(error)
    // }

    ////////////////// Delete ////////////////////////
    // try {
    //     const id = '2'
    //     const doc = query.doc(id)
    //     const item = await doc.delete()
    //     console.log(`Item eliminado: ${item}`)
    // } catch (error) {
    //     console.log(error)
    // }


    // try {
    //     /// leer todos los documentos 
    //     const queryUsuarios = await query.get()
    //     // let docs = queryUsuarios.docs

    //     const respuesta = queryUsuarios.docs.map(documentos => ({ id: documentos.id, ...documentos.data() }) ) // []

    //     console.log(respuesta) // resp.docs.map(doc => doc.data())
    // } catch (error) {
    //     console.log(error)
    // }
}