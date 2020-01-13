const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  Estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
  },
  inscripciones: [
      { type: mongoose.Schema.Types.ObjectId, 
        ref: 'inscripcion' }],
});

const Profile = mongoose.model('profile', ProfileSchema);
module.exports = Profile;
