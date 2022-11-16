import {faker} from '@faker-js/faker'
import { writeFile } from 'fs/promises'

faker.locale = 'es'
const {name, internet, random} = faker

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 100; i++) {
    str += `${name.firstName()};${name.lastName()};${internet.email()};${name.jobTitle()};${random.locale()}\n`
}

writeFile('personas.csv', str)
    .then(() => console.log('Archivo creado'))
    .catch(err => console.error)

