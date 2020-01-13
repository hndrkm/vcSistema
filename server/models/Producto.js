const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema(
    {   
        codigo: {type:Number,
        unique: true,
        required: true},
        nombre: String,
        precioVenta: Number,
        precioDistribuidor: Number
    }, {
        timestamps: true
    });

module.exports = model('Producto', ProductoSchema);