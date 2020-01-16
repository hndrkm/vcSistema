const { Schema, model } = require('mongoose');

const cajaSchema = new Schema(
    {
        cajacode: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        montoInicial: Number,
        montoFinal: Number,
        usuario: String,
        fecha: Date,
        fechaT:String
    }, {
        timestamps: true
    });

module.exports = model('Caja', cajaSchema);