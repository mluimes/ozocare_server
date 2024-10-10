//---------------------------------------
// app.js 
// Mario Luis Mesa
//---------------------------------------

// Importa Express y otros módulos necesarios
const express = require('express');
const cors = require('cors');
const medidasRoutes = require('./routes/medidasRoutes'); // Rutas relacionadas con "medidas"

const app = express(); // Inicializa la aplicación Express

// Middleware para analizar las solicitudes entrantes como JSON
app.use(express.json());
app.use(cors()); // Permitir solicitudes entre diferentes dominios (CORS)

// Ruta principal para verificar que el backend está corriendo
app.get('/', (req, res) => {
  res.send('Esto es el backend, bro');
});

// Ruta para manejar las solicitudes de medidas
app.use('/api/v1/medidas', medidasRoutes); // Usa las rutas definidas en medidasRoutes

// Exporta la app para usarla en otros archivos (como index.js)
module.exports = app;
