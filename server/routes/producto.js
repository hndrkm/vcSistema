const { Router } = require('express');
const router = Router();

const { getProductos,createProducto, deleteProducto } = require('../controllers/porducto.controller');

router.route('/')
    .get(getProductos)
    .post(createProducto);

router.route('/:id')
    .delete(deleteProducto);

module.exports = router;
