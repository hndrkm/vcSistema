import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Estudiantes extends Component {

    state = {
        estudiantes: [],
        cont:0,
    }

    async componentDidMount() {
        this.getEstudiantes();
    }

    getEstudiantes = async () => {
        const res = await axios.get('/api/estudiantes');
        this.setState({
            estudiantes: res.data
        });
    }
    deleteEstudiante = async (estudianteId) => {
        const response = window.confirm('esta segurro de boorar?');
        if (response) {
            await axios.delete('/api/estudiantes/' + estudianteId);
            this.getEstudiantes();
        }
    }

    render() {
        return (
            <div className="col-md-12">
                
            <table class="table table-borderless table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">nombre</th>
                        <th scope="col">CI</th>
                        <th scope="col"></th>
                        <th scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.estudiantes.map(estudiante => (
                        <tr key={estudiante._id}>
                            <td>{this.state.cont = this.state.cont+1}</td>
                            <td>{estudiante.nombre+ " "}
                                   </td>
                            <td> {estudiante.CI+ " "}</td>
                            <td>
                            <button type="button" class="btn btn-outline-info">INSCRIBIR</button>
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                <Link to={"/Perfil/" + estudiante._id} className="btn btn-secondary">
                                        VER
                                </Link>
                                <button type="button" class="btn btn-outline-danger">Borrar</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
               
        )
    }
}
