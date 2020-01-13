const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        pasword:String,
        tipo:String
    }, {
        timestamps: true
    });

module.exports = model('User', userSchema);