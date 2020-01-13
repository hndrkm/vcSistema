const { Router } = require('express');
const router = Router();

const { getCuotas,createCuota, deleteCuota } = require('../controllers/cuota.controller');

router.route('/')
    .get(getCuotas)
    .post(createCuota);

router.route('/:id')
    .delete(deleteCuota);

module.exports = router;
