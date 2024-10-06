// Archivo principal - app.js

const PORT = process.env.PORT || 3000; // Usa el puerto del entorno o 3000 por defecto
const express = require('express');
const app = express();
const medidasRoutes = require('./routes/medidasRoutes'); // Importar rutas de medidas

// Conectar a la base de datos
require('./database');

// Middleware para parsear JSON (tiene que ser invocado como función)
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para manejar solicitudes relacionadas con "medidas"
app.use('/api/v1/medidas', medidasRoutes);

// Iniciar el servidor
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
  } else {
    console.log(`Servidor abierto en el puerto ${PORT}`);
  }
});
