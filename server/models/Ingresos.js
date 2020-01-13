const { Schema, model } = require('mongoose');

const ingresoSchema = new Schema(
    {   
        codigo: {type:Number,
        unique: true,
        required: true},
        objeto: String,
        fecha: Date,
        total: Number,
        cantidad:Number,
        monto:Number
    }, {
        timestamps: true
    });

module.exports = model('Ingreso', ingresoSchema);