const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db');

//Middleware's de Seguridad
app.use(helmet()); //Util para evitar ataques X-Content-Type-Options, X-DNS-Prefetch-Control, X-Frame-Options, Strict-Transport-Security, X-Download-Options, X-XSS-Protection

//Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta
app.get('/', (req, res) => {
    res.render('index', { title: 'NANDO_REPARACIONES' });
});

// Iniciar Servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en puerto: ${port}`);

});