// medidasModel.js

const mongoose = require('mongoose');

const medidasSchema = new mongoose.Schema({
    temperatura: {
        
        type: Number,
        required: true
    } ,

    concentracionGas: {
        type: Number,
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }
})

const Medidas = mongoose.model('Medidas', medidasSchema);
module.exports = Medidas;