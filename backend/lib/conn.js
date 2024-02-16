const mysql = require('mysql2');

// creates connection string
connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'todolist',
    password: 'todolist',
    database: 'todolist'
})

module.exports = connection;