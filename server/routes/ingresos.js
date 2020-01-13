const { Router } = require('express');
const router = Router();

const { getIngresos,createIngreso, deleteIngreso, getIngreso,updateIngreso } = require('../controllers/ingresos.controller');


router.route('/')
    .get(getIngresos)
    .post(createIngreso);

router.route('/:id')
    .get(getIngreso)
    .delete(deleteIngreso)
    .put(updateIngreso);

module.exports = router;
