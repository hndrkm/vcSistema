const { Router } = require('express');
const router = Router();

const { getEstudiantes, createEstudiante, getEstudiante, deleteEstudiante} = require('../controllers/estudiante.controller');

router.route('/')
    .get(getEstudiantes)
    .post(createEstudiante);

router.route('/:id')
    .get(getEstudiante)
    .delete(deleteEstudiante)

module.exports = router;


