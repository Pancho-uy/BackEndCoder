export const dbConnection = {
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'test'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './mydb.sqlite'
        },
        useNullAsDefault: true
    }
}

