const { Router } = require('express');
const router = Router();

const { getPerfiles, createPerfil, getPerfil, deletePerfil, updatePerfil } = require('../controllers/Perfil.controller');

router.route('/')
    .get(getPerfiles)
    .post(createPerfil);

router.route('/:id')
    .get(getPerfil)
    .delete(deletePerfil)


module.exports = router;


