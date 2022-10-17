// Conecto con el SQLite
const configSQLite = {
    client: "sqlite3",
    connection: {
      filename: "./DB/mydb.sqlite"
    },
    useNullAsDefault: false,
  };

module.exports = { configSQLite };