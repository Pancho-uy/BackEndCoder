// Conecto a sqlite3
const conectorChat = {
      client: "sqlite3",
    connection: {
      filename: "./chatlog.sqlite3",
    },
  useNullAsDefault: true,
  pool: {
    min: 2,
    max: 8,
  },
};

module.exports = {conectorChat};
