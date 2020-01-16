const { Router } = require('express');
const router = Router();

const { getCajas,createCaja, deleteCaja, getCajaF} = require('../controllers/caja.controller');

router.route('/cajaF')
    .get(getCajaF);
router.route('/')
    .get(getCajas)
    .post(createCaja);

router.route('/:id')
    .delete(deleteCaja);

module.exports = router;
