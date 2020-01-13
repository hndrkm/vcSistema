const ingresosCtrl = {};
const Ingreso = require('../models/Ingresos');


ingresosCtrl.getIngresos = async (req, res) => {
    const ingresos = await Ingreso.find();
    res.json(ingresos);
};

ingresosCtrl.createNote = async (req, res) => {
    const { codigo, objeto, fecha, total, cantidad,monto} = req.body;
    const newIngreso = new Note({
        codigo,
        objeto,
        fecha,
        total,
        cantidad,
        monto
    });
    await newIngreso.save();
    res.json('nuevo ingreso add');
};

ingresosCtrl.getIngreso = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

ingresosCtrl.deleteIngreso = async (req, res) => {
    await Ingreso.findByIdAndDelete(req.params.id)
    res.json('ingreso eleminado');
}

ingresosCtrl.updateIngreso = async (req, res) => {
    const { codigo, objeto, fecha, total, cantidad,monto} = req.body;
    await Ingreso.findByIdAndUpdate(req.params.id, {
        codigo,
        objeto,
        fecha,
        total,
        cantidad,
        monto
    });
    res.json('ingreso actualizado');
}

module.exports = ingresosCtrl;