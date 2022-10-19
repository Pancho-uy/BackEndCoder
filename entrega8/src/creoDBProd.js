// Creo tabla de productos si no existe
const { conectorDB } = require("./conectorDB");
const knex = require("knex")(conectorDB);

knex.schema
  .createTableIfNotExists("productos", (table) => {
    table.increments("id").primary();
    table.string("title", 128);
    table.integer("price");
    table.string("thumbnail");
  })

  .then(() => {
    console.log("Tabla de productos creada");
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    knex.destroy();
  });

// productos de muestra
const arr = [
  {
    title: "Escuadra",
    price: 100,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    title: "Calculadora",
    price: 200,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    title: "Globo Terráqueo",
    price: 150,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
    title: "Lapiz Mecanico",
    price: 45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-512.png",
  },
  {
    title: "Calculadora Cientifica Casio",
    price: 74,
    thumbnail:
      "https://cdn2.iconfinder.com/data/icons/logos-brands-4/24/logo_brand_brands_logos_google_keyboard-512.png",
  },
];

knex.from("productos")
  .insert(arr)
  .then(() => {
    console.log("Productos insertados");
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    knex.destroy();
  });
