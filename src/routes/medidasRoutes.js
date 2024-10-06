// sensorRoutes.js

const express = require('express');
const medidasController = require('../controllers/medidasController');

const router = express.Router();

router.post('/', medidasController.guardarMedidas);
router.get('/', medidasController.obtenerMedidas);

module.exports = router;