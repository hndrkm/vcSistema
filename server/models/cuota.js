const { Schema, model } = require('mongoose');

const cuotaSchema = new Schema(
    {
        estudiante: {
            type: String,
            ref: 'Estudiante',
            required: true,
        },
        curso:{
            type: String,
            ref: 'Curso',
            required: true,
        },
        inscripcion:{
            type: String,
            ref: 'inscripcion',
            required: true,
        },
        cuenta:String,
        fecha: Date,
        precio: Number

    }, {
        timestamps: true
    });

module.exports = model('Cuota', cuotaSchema);