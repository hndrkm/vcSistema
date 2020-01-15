import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class caja extends Component {

    state = {
        cont :0,
        inscripciones: [],
        cursos: [],
        estudiantes:[],
    }
    async componentDidMount() {
        this.getInscripciones();
        this.getCursos();
        this.getEstudiantes();
    }
    getEstudiantes = async () => {
        const res = await axios.get('/api/estudiantes');
        this.setState({
            estudiantes: res.data
        });
    }
    getInscripciones = async () => {
        const res = await axios.get('/api/inscripciones');
        this.setState({
            inscripciones: res.data
        });
    }
    getCursos = async () => {
        const res = await axios.get('/api/cursos');
        this.setState({
            cursos: res.data
        });
    }
    deleteInscripciones = async (inscripcionId) => {
        const response = window.confirm('esta segurro de boorar?');
        if (response) {
            await axios.delete('/api/inscripciones/' + inscripcionId);
            this.getInscripciones();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.cursos.map( curso =>(

                    
                <table key={curso._id} className="table table-striped table-dark">
                    <thead >
                        <tr>
                           <th>{curso.cursoname}</th> 
                        </tr>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">CI</th>
                            <th scope="col">FechaInscripcion</th>
                            <th scope="col">Cuotas</th>
                            <th scope="col">Celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inscripciones.map( (inscripcion) =>{
                            
                        if (curso.cursocode == inscripcion.curso) {
                            return (<tr key={inscripcion._id}>
                            <th scope="row">{inscripcion.estudiante + " "}</th>
                            <td>{inscripcion.estudiante}</td>
                            <td>{inscripcion.fechaInicio + " "}</td>
                            <td>{inscripcion.cuotas}</td>
                            <td>@mdo</td>
                        </tr>)
                        }
                        return ;
                        
                    })}
                    </tbody>
                </table>
                ))}
            </div>

        );
    }
}
