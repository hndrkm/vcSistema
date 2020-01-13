const perfilCtrl = {};

const Perfil = require('../models/perfil');

perfilCtrl.getPerfiles = async (req, res) => {
    try {
        const perfiles = await Perfil.find();
        res.json(perfiles);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

perfilCtrl.createPerfil = async (req, res) => {
    try {
        const { Estudiante, inscripciones } = req.body;
    const newPerfil = new Perfil({
        Estudiante,
        inscripciones,
    });
    await newPerfil.save();
    res.json('New Perfil added');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};
perfilCtrl.getPerfil = async (req, res) => {
    console.log(req.params.id);
    const perfil = await Perfil.findById(req.params.id);
    res.json(perfil);
}

perfilCtrl.deletePerfil = async (req, res) => {
    const { id } = req.params;
    await Perfil.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = perfilCtrl;