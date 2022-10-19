// Conecto a mysql
const conectorDB ={
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "test",
  }
};

module.exports = {conectorDB};
