import { faker } from '@faker-js/faker'
faker.locale = 'es'
const { name, internet, image } = faker

function generarUsuario() {
    return {        
        nombre: name.findName(),
        email: internet.email(),
        website: internet.url(),
        image: image.avatar(),
    }
}

export { generarUsuario }