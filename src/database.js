//---------------------------------------
// database.js 
// Mario Luis Mesa
//---------------------------------------

// Importa mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Conecta a la base de datos MongoDB usando una URL
mongoose.connect('mongodb://mongodb:27017/mongodb')
    .then(db => console.log('Base de datos conectada a ', db.connection.host)) // Si la conexión es exitosa, muestra un mensaje
    .catch(err => console.error('Error conectando a mongodb', err)); // Si falla la conexión, captura el error
