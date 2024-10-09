// app.js

const express = require('express');
const cors = require('cors');
const medidasRoutes = require('./routes/medidasRoutes'); // Importar rutas de medidas

const app = express();

// Middleware para parsear JSON (debe ser invocado como función)
app.use(express.json());
app.use(cors());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('Esto es el backend, bro');
});

// Ruta para manejar solicitudes relacionadas con "medidas"
app.use('/api/v1/medidas', medidasRoutes);

// Exportar la aplicación para usarla en index.js y pruebas
module.exports = app;
