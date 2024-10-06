// index.js

const PORT = process.env.PORT || 3000; // Usa el puerto del entorno o 3000 por defecto
const app = require('./app'); // Importar la aplicación
require('./database'); // Conectar a la base de datos

// Iniciar el servidor
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
  } else {
    console.log(`Servidor abierto en el puerto ${PORT}`);
  }
});
