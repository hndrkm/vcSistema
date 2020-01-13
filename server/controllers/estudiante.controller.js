const estudianteCtrl = {};

const Estudiante = require('../models/Estudiante');

estudianteCtrl.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
estudianteCtrl.getEstudiante = async (req, res) => {
    const estudiante = await Estudiante.findById(req.params.id);
    res.json(estudiante);
}

estudianteCtrl.createEstudiante = async (req, res) => {
    try {
        const { CI,ext, nombre, apPaterno,apMaterno, fechaNacimiento, correoElectronico,telefonoFijo,celular} = req.body;
        const newEstudiante = new Estudiante({
            CI,
            ext,
            nombre,
            apPaterno,
            apMaterno,
            fechaNacimiento,
            correoElectronico,
            telefonoFijo,
            celular
        });
        await newEstudiante.save();
        res.json('Estudiante created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

estudianteCtrl.deleteEstudiante = async (req, res) => {
    const { id } = req.params;
    await Estudiante.findByIdAndDelete(id);
    res.json('Estudiante eliminado');
}

module.exports = estudianteCtrl;