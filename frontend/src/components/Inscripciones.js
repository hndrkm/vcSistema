import React, { Component } from 'react'
import axios from 'axios'
export default class Inscripciones extends Component {

    state = {
        cont :0,
        inscripciones: []
    }

    async componentDidMount() {
        this.getInscripciones();
    }

    getInscripciones = async () => {
        const res = await axios.get('/api/inscripciones');
        this.setState({
            inscripciones: res.data
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

            <div className="col-md-12">
                
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">fecha</th>
                            <th scope="col">estudiante</th>
                            <th scope="col">curso</th>
                            <th scope="col">acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.inscripciones.map(inscripcion => (
                            <tr className="" key={inscripcion._id}>
                                <td>{this.state.cont = this.state.cont+1}</td>
                                <td>{inscripcion.fechaInicio + " "}</td>
                                <td>{inscripcion.estudiante + " "}</td>
                                <td>{inscripcion.curso + " "}</td>
                                <td>
                                <button type="button" class="btn btn-outline-info">Cerrar</button>
                                <button type="button" class="btn btn-outline-success">Cuota</button>
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                <button className="btn btn-danger" onClick={() => this.deleteInscripciones(inscripcion._id)}>
                                    Borrar
                                </button>
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
