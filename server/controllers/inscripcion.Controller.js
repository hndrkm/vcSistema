const inscripcionCtrl = {};

const Inscripcion = require('../models/inscripcion');

inscripcionCtrl.getInscripciones = async (req, res) => {
    try {
        const estudiantes = await Inscripcion.find();
        res.json(estudiantes);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
inscripcionCtrl.getInscripcion = async (req, res) => {
    const estudiante = await Inscripcion.findById(req.params.id);
    res.json(estudiante);
}
inscripcionCtrl.createInscripcion = async (req, res) => {
    try {
        const { curso, fechaInscripcion, fechaInicio, horario, turno, estudiante, cuotas, precioMatricula, precioMes } = req.body;
        const newEstudiante = new Inscripcion({
            curso,
            fechaInicio,
            fechaInscripcion,
            horario,
            turno,
            estudiante,
            cuotas,
            precioMes,
            precioMatricula
        });
        await newEstudiante.save();
        res.json('Inscripcion creada');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

inscripcionCtrl.deleteInscripcion = async (req, res) => {
    const { id } = req.params;
    await Inscripcion.findByIdAndDelete(id);
    res.json('Inscripcion eliminada');
}
inscripcionCtrl.updateInscripcion = async (req, res) => {
    const { curso, fechaInscripcion, fechaInicio, horario, turno, estudiante, cuotas, precioMatricula, precioMes } = req.body;
    await Inscripcion.findByIdAndUpdate(req.params.id, {
        curso,
        fechaInicio,
        fechaInscripcion,
        horario,
        turno,
        estudiante,
        cuotas,
        precioMes,
        precioMatricula
    });
    res.json('Inscripcion Updated');
}

module.exports = inscripcionCtrl;