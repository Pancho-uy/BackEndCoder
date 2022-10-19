// Creo tabla para el chat si no existe
const { conectorChat } = require("./conectorChat");
const knex = require("knex")(conectorChat);

knex.schema
  .createTableIfNotExists("chatlog", (table) => {
    table.increments("id").primary();
    table.string("msg", 256);
    table.string("name", 256);
  })

  .then(() => {
    console.log("Tabla de Chat creada");
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    knex.destroy();
  });