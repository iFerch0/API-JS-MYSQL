const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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