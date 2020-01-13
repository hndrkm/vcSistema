const { Router } = require('express');
const router = Router();

const { getInscripciones, createInscripcion, getInscripcion, deleteInscripcion, updateInscripcion } = require('../controllers/inscripcion.controller');

router.route('/')
    .get(getInscripciones)
    .post(createInscripcion);

router.route('/:id')
    .get(getInscripcion)
    .delete(deleteInscripcion)
    .put(updateInscripcion);

module.exports = router;
