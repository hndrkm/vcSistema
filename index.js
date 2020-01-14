require('dotenv').config();
const path = require('path');

require('./server/database');
const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/inscripciones', require('./server/routes/inscripcion'));
app.use('/api/estudiantes', require('./server/routes/estudiantes'));
app.use('/api/cursos', require('./server/routes/curso'));
app.use('/api/notes', require('./server/routes/notes'));
app.use('/api/users', require('./server/routes/users'));
app.use('/api/cuotas', require('./server/routes/cuota'));
app.use('/api/perfil', require('./server/routes/perfil'));



async function main() {
    app.use(express.static('./frontend/build'));
    console.log("estoy wen preduccion");
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
      console.log(res);
    });
  
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();