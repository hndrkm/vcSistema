const { Schema, model } = require('mongoose');

const cursoSchema = new Schema(
    {
        cursocode: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        cursoname: String,
        tipo: String
        
    }, {
        timestamps: true
    });

module.exports = model('Curso', cursoSchema);