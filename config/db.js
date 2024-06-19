const mysql = require('mysql');
require('dotenv').config();


const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'nando_reparaciones'
});

const connectWithRetry = () => {
    connection.connect((err) => {
        if (err){
            console.error('Hubo un error al conectar a la base de datos: ', err.stack);
            setTimeout(connectWithRetry, 2000);
        } else{
            console.log('Conectado a la base de datos. ID: ', connection.threadId);
        }
    });
};

connectWithRetry();
module.exports = connection;