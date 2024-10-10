//---------------------------------------
// medidasModel.js 
// Mario Luis Mesa
//---------------------------------------

// Importa mongoose para definir un esquema y un modelo de MongoDB
const mongoose = require('mongoose');

// Define el esquema de las "medidas" en la base de datos
const medidasSchema = new mongoose.Schema({
    temperatura: {
        type: Number,
        required: true // Campo obligatorio
    },
    concentracionGas: {
        type: Number,
        required: true // Campo obligatorio
    },
    fecha: {
        type: Date,
        default: Date.now // Se establece automáticamente la fecha actual
    }
})

// Crea un modelo a partir del esquema definido
const Medidas = mongoose.model('Medidas', medidasSchema);

// Exporta el modelo para poder usarlo en otras partes de la aplicación
module.exports = Medidas;
