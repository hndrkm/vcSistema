const { Schema, model } = require('mongoose');

const inscripcionSchema = new Schema(
    {
        curso: { type: String ,required: true},
        fechaInscripcion: Date,
        fechaInicio: Date,
        horario:String,
        turno:String,
        estudiante: { type: String ,required: true},
        cuotas: Number,
        precioMes: Number,
        precioMatricula: Number
    }, {
        timestamps: true
    });

module.exports = model('Inscripcion', inscripcionSchema);