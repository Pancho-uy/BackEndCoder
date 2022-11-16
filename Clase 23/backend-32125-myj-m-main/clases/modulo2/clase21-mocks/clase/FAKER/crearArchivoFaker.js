import { faker } from '@faker-js/faker'
import { writeFile } from 'fs/promises'

faker.locale = 'es'
const {name, internet, random } = faker

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

const crearArchivoPersonas = async (cantidad) => {
    try {
        for (let i = 0; i < cantidad; i++) {
            str += `${name.firstName()};${name.lastName()};${internet.email()};${name.jobTitle()};${random.locale()}\n`
        }        
        await writeFile('./personas.csv', str)
        console.log('Archivo creado')          
    } catch (error) {
        console.log(error) 
    }
    
}

export default crearArchivoPersonas
