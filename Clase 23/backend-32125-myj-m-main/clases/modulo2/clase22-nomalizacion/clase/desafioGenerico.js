const normalizr = require('normalizr')
const { schema, normalize, denormalize } = normalizr
const util = require('util')
const data = require('./archivos/empresa.js')
// const dataEmpresa = require('./archivos/empresa.json')

function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}

const gerenteSchema = new schema.Entity('gerentes')

const encargadoSchema = new schema.Entity('encargados')

const empleadoSchema = new schema.Entity('empleados', {
    gerente: gerenteSchema,
    encargado: encargadoSchema
})

const empresaSchema = new schema.Entity('empresas', {
    gerente: gerenteSchema,
    encargado: encargadoSchema,
    empleados: [empleadoSchema]
})

const normalizedEmpresa = normalize(data, empresaSchema)
console.log(normalizedEmpresa)

// print(normalizedEmpresa)

// const denormalizedEmpresa = denormalize(normalizedEmpresa.result, empresaSchema, normalizedEmpresa.entities)
// print(denormalizedEmpresa)