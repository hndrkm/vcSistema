const { Schema, model } = require('mongoose');

const estudianteSchema = new Schema(
    {   
        CI: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        ext:String,
        nombre: String,
        apPaterno: String,
        apMaterno: String,
        fechaNacimineto: Date,
        correoElectronico: String,
        telefonoFijo:Number,
        celular:Number
    }, {
        timestamps: true
    });

module.exports = model('Estudiante', estudianteSchema);