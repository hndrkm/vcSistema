const productoCtrl = {};

const producto = require('../models/Producto');

productoCtrl.getProductos = async (req, res) => {
    try {
        const productos = await producto.find();
        res.json(productos);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

productoCtrl.createProducto = async (req, res) => {
    try {
        const { codigo, nombre,precioVenta,precioDistribuidor} = req.body;
        const newproducto = new producto({
            codigo,
            nombre,
            precioVenta,
            precioDistribuidor
        });
        await newproducto.save();
        res.json('producto creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

productoCtrl.deleteProducto = async (req, res) => {
    const { id } = req.params;
    await producto.findByIdAndDelete(id);
    res.json('producto deleted');
}

module.exports = productoCtrl;