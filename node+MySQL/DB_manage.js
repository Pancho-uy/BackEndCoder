const {option} = require('./conectorDB');

const knex = require('knex')(option);
console.log(knex);


const productos= [
    {
      "nombre": "Escuadra",
      "precio": "65",
      "descripcion": "Escuadra de plástico",
      "foto": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-512.png",
      "timestamp": "13/10/2022, 09:05:24",
      "id": 1
    },
    {
      "nombre": "Calculadora",
      "precio": "700",
      "descripcion": "Calculadora a pilas",
      "foto": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "timestamp": "13/10/2022, 09:01:36",
      "id": 2
    },
    {
      "nombre": "Mochila",
      "precio": "1900",
      "descripcion": "Mochila Escolar",
      "foto": "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-128.png",
      "timestamp": "13/10/2022, 09:01:24",
      "id": 3
    },
    {
      "nombre": "Router WIFI",
      "precio": "2790",
      "descripcion": "TP-Link Archer C80 V1",
      "foto": "https://http2.mlstatic.com/D_NQ_NP_2X_744569-MLA45315558714_032021-F.webp",
      "timestamp": "12/10/2022, 20:10:21",
      "id": 4
    },
    {
      "nombre": "Router WIFI",
      "precio": "4585",
      "descripcion": "MikroTik 952",
      "foto": "https://http2.mlstatic.com/D_NQ_NP_2X_744569-MLA45315558714_032021-F.webp",
      "timestamp": "13/10/2022, 09:07:56",
      "id": 5
    },
    {
      "nombre": "Laptop Gamer MSI",
      "precio": "60000",
      "descripcion": "Laptop gamer",
      "foto": "https://images-ti-vm1.tiendainglesa.com.uy/medium/P535601-7.jpg?20220922102049,Notebook-Gamer-MSI-15.6%22-Full-HD-GF63-Thin-256-Gb-SSD-8-Gb-RAM-en-Tienda-Inglesa",
      "timestamp": "13/10/2022, 08:57:45",
      "id": 6
    },
    {
      "nombre": "Café",
      "precio": "1560",
      "descripcion": "Etíope ABOL ",
      "foto": "https://www.abolcoffeeco.com/wp-content/uploads/2021/03/Abol-Coffee-Co-NO.2-SIDAMO.jpg",
      "timestamp": "13/10/2022, 09:28:26",
      "id": 7
    }
  ]

// Creo la tabla en el servidor

/* knex.schema.createTable('productos', table => {
    table.increments('id').primary();
    table.string('nombre');
    table.integer('precio');
    table.string('foto');
    table.string('descripcion');
    table.string('timestamp');
}).then(() => console.log('Tabla creada')) */


//Inserto los productos en la tabla

knex('productos').insert(productos)
.then(() => console.log('Productos insertados'))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knex.destroy();
});

