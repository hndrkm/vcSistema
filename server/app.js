const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/inscripciones', require('./routes/inscripcion'));
app.use('/api/estudiantes', require('./routes/estudiantes'));
app.use('/api/cursos', require('./routes/curso'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/cuotas', require('./routes/cuota'));
app.use('/api/perfil', require('./routes/perfil'));

module.exports = app;
