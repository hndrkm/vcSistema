const cursoCtrl = {};

const curso = require('../models/Curso');

cursoCtrl.getCursos = async (req, res) => {
    try {
        const cursos = await curso.find();
        res.json(cursos);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

cursoCtrl.createCurso = async (req, res) => {
    try {
        const { cursocode, cursoname ,tipo} = req.body;
        const newCurso = new curso({
            cursocode,
            cursoname,
            tipo
        });
        await newCurso.save();
        res.json('curso creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

cursoCtrl.deleteCurso = async (req, res) => {
    const { id } = req.params;
    await curso.findByIdAndDelete(id);
    res.json('curso deleted');
}

module.exports = cursoCtrl;