const express = require('express');

const router = express.Router();

const verificarToken = require('../middlewares/auth.middleware');

const {
    obtenerPaquetes,
    obtenerPaquete,
    crearPaquete,
    actualizarPaquete,
    eliminarPaquete
} = require('../controllers/paquetes.controller');


// GET TODOS
router.get('/', obtenerPaquetes);

// GET POR ID
router.get('/:id', obtenerPaquete);

// POST
router.post(
    '/',
    verificarToken,
    crearPaquete
);

// PUT
router.put(
    '/:id',
    verificarToken,
    actualizarPaquete
);

// DELETE
router.delete(
    '/:id',
    verificarToken,
    eliminarPaquete
);


module.exports = router;