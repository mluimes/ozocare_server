// app.js

const express = require('express');
const medidasRoutes = require('./routes/medidasRoutes'); // Importar rutas de medidas

const app = express();

// Middleware para parsear JSON (debe ser invocado como función)
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para manejar solicitudes relacionadas con "medidas"
app.use('/api/v1/medidas', medidasRoutes);

// Exportar la aplicación para usarla en index.js y pruebas
module.exports = app;
