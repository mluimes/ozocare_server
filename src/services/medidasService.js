//---------------------------------------
// medidasService.js 
// Mario Luis Mesa
//---------------------------------------

// Importa el modelo de Medidas para interactuar con la base de datos
const Medidas = require('../models/medidasModel');

// Define el servicio que interactúa con la base de datos para operaciones CRUD
const medidasService = {
    guardarMedidas: async (datosMedidas) => {
        const medidas = new Medidas(datosMedidas); // Crea una nueva instancia del modelo con los datos recibidos
        return await medidas.save(); // Guarda las medidas en la base de datos
    },

    obtenerMedidas: async () => {
        return await Medidas.find(); // Obtiene todas las medidas de la base de datos
    }
    // Nota: Se recomienda agregar try/catch en estas funciones para capturar errores.
}

// Exporta el servicio para poder ser utilizado por los controladores
module.exports = medidasService;
