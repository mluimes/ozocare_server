// medidasService.js

const Medidas = require('../models/medidasModel');

const medidasService = {
    guardarMedidas: async (datosMedidas) => {
        const medidas = new Medidas(datosMedidas);
        return await medidas.save();
    }, 

    obtenerMedidas: async () => {
        return await Medidas.find();
    }

    // usar try catch
}

module.exports = medidasService; 