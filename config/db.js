const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nando_reparaciones'
});

connection.connect((err) => {
    if (err) {
        console.error('Hubo un error al conectar a la base de datos: ', err.stack);
        return;
    }
    console.log('Conectado a la base de datos. ID: ', connection.threadId);
});

module.exports = connection;