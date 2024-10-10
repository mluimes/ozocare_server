//---------------------------------------
// medidasController.js 
// Mario Luis Mesa
//---------------------------------------

// Importa el servicio que interactúa con la base de datos
const medidasService = require('../services/medidasService');

// Controlador que maneja las solicitudes de medidas
const medidasController = {
    guardarMedidas: async (req, res) => {
        try {
            console.log("Datos recibidos:", req.body); // Log para ver qué datos se envían en la solicitud
            const medidas = await medidasService.guardarMedidas(req.body); // Llama al servicio para guardar medidas
            res.status(201).json(medidas); // Responde con las medidas guardadas
        } catch (err) {
            res.status(400).json({ message: err.message }); // Maneja errores en la solicitud
        }
    },
    obtenerMedidas: async (req, res) => {
        try {
            const medidas = await medidasService.obtenerMedidas(); // Llama al servicio para obtener todas las medidas
            res.status(200).json(medidas); // Responde con las medidas obtenidas
        } catch (err) {
            res.status(500).json({ message: err.message }); // Maneja errores en la solicitud
        }
    }
}

// Exporta el controlador para usarlo en las rutas
module.exports = medidasController;
