// medidasControles.js

const medidasService = require('../services/medidasService');

// manejan la lógica de las solicitudes HTTP y responden al cliente.
const medidasController = {
    guardarMedidas: async (req, res) => {
        try {
            const medidas = await medidasService.guardarMedidas(req.body);
            res.status(201).json(medidas);
        } catch(err) {
            res.status(400).json({message: err.message });
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

module.exports = medidasController;``