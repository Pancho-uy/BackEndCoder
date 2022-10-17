const configMaria = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'test'
    },
    useNullAsDefault: true,
}; 

module.exports = { configMaria };


/* const dotenv = require('dotenv');
dotenv.config(); */

// Conecto con MariaDB con .ENV 

/* const configMaria = {
    client: 'mysql',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    useNullAsDefault: true,
}; */
