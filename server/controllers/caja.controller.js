const cajaCtrl = {};

const caja = require('../models/caja');

cajaCtrl.getCajas = async (req, res) => {
    try {
        const cajas = await caja.find();
        res.json(cajas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
cajaCtrl.getCajaF = async (req,res)=>{
    var a = new Date();
    fec= a.getDate()+'/'+a.getMonth()+1+'/'+a.getFullYear();

    try {
        const cajas = await caja.find({ fechaT: fec });
        res.json(cajas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};
cajaCtrl.createCaja = async (req, res) => {
    try {
        const { cajacode, montoInicial,usuario,fecha,fechaT} = req.body;
        const newCaja = new caja({
            cajacode,
            montoInicial,
            usuario,
            fecha,
            fechaT,
        });
        await newCaja.save();
        res.json('caja creada');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

cajaCtrl.deleteCaja = async (req, res) => {
    const { id } = req.params;
    await caja.findByIdAndDelete(id);
    res.json('caja deleted');
}

module.exports = cajaCtrl;