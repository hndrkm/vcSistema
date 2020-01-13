const cuotaCtrl = {};

const cuota = require('../models/cuota');

cuotaCtrl.getCuotas = async (req, res) => {
    try {
        const cuotas = await cuota.find();
        res.json(cuotas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

cuotaCtrl.createCuota = async (req, res) => {
    try {
        const { estudiante, curso,inscripcion,fecha,precio,cuenta} = req.body;
        const newCuota = new cuota({
            estudiante,
            curso,
            inscripcion,
            fecha,
            precio,cuenta
        });
        await newCuota.save();
        res.json('cuota creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

cuotaCtrl.deleteCuota = async (req, res) => {
    const { id } = req.params;
    await cuota.findByIdAndDelete(id);
    res.json('cuota deleted');
}

module.exports = cuotaCtrl;