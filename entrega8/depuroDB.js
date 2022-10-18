exports.up = function (knex) {
  knex.schema
    .createTable("logs", (table) => {
      table.increments("id").primary();
      table.string("name", 128);
      table.string("msg");
    })
    .then(() => {
      console.log("Tabla de chatLog creada");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.down = function (knex) {};
