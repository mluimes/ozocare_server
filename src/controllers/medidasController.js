// medidasControles.js

const medidasService = require('../services/medidasService');

// Controlador para manejar las solicitudes relacionadas con medidas
const medidasController = {
    guardarMedidas: async (req, res) => {
        try {
            // Devuelve el cuerpo recibido para depuración
            console.log("Datos recibidos:", req.body);
            // Llama al servicio para guardar las medidas
            const medidas = await medidasService.guardarMedidas(req.body);
            res.status(201).json(medidas);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    obtenerMedidas: async (req, res) => {
        try {
            const medidas = await medidasService.obtenerMedidas();
            res.status(200).json(medidas);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

module.exports = medidasController;