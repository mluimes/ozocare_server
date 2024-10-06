// database.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/mongodb')
    .then(db => console.log('Base de datos conectada a ', db.connection.host))
    .catch(err => console.error('Error conectando a mongodb', err));