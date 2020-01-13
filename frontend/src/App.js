import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import CreateEstudiante from './components/CreateEstudiante'
import Estudiantes from './components/Estudiantes'
import Cursos from './components/createCurso'
import CreateInscripciones from './components/createInscripcion'
import Inscripciones from './components/Inscripciones'
import InscripcionesPorCurso from './components/InscripcionesPorCurso'
//plantillas
import flujo3 from './components/flujoIns/pagarcuota'
import flujo1 from './components/flujoIns/CreateFullInscripcion'
import flujo2 from './components/flujoIns/PerfilEstudiante'
import Menu from './components/Menu'
import ingresos from './components/RegIngresos'
import cuotas from './components/RegCuota'
import caja from './components/pruebas/abrirCaja'

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

  }

render() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">

        <Route path="/flujo" component={flujo1} />
        <Route path="/Perfil/:id" component={flujo2} />
        <Route path="/cuota/:id" component={flujo3} />
        

        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
        <Route path="/createEstudiante" component={CreateEstudiante} />
        <Route path="/Estudiantes" component={Estudiantes} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/createInscripciones" component={CreateInscripciones} />
        <Route path="/Inscripciones" component={Inscripciones} />
        <Route path="/Menu" component={Menu} />
        <Route path="/ingresos" component={ingresos} />
        <Route path="/cuotas" component={cuotas} />
        <Route path="/caja" component={caja} />
        <Route path="/inpC" component={InscripcionesPorCurso} />
      </div>
    </Router>
          
  );
}
}

export default App;
