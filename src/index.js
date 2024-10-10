//---------------------------------------
// index.js 
// Mario Luis Mesa
//---------------------------------------

// Define el puerto en el que correrá la aplicación (usa uno del entorno si está disponible)
const PORT = process.env.PORT || 3000;

// Importa la aplicación Express y la conexión a la base de datos
const app = require('./app');
require('./database');

// Inicia el servidor en el puerto definido
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err); // Maneja cualquier error al iniciar el servidor
  } else {
    console.log(`Servidor abierto en el puerto ${PORT}`); // Confirma que el servidor está corriendo
  }
});
