//---------------------------------------
// medidasRoutes.js 
// Mario Luis Mesa
//---------------------------------------

// Importa Express y el controlador de medidas
const express = require('express');
const medidasController = require('../controllers/medidasController');

const router = express.Router(); // Crea un router de Express

// Define las rutas para las operaciones sobre medidas
router.post('/', medidasController.guardarMedidas); // Ruta para crear nuevas medidas
router.get('/', medidasController.obtenerMedidas);  // Ruta para obtener todas las medidas

// Exporta el router para usarlo en la aplicación principal
module.exports = router;
