const { Router } = require('express');
const router = Router();

const { getCursos,createCurso, deleteCurso } = require('../controllers/cursos.controller');

router.route('/')
    .get(getCursos)
    .post(createCurso);

router.route('/:id')
    .delete(deleteCurso);

module.exports = router;
