import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
export default class CreateInscripcion extends Component {

    state = {
        curso: '',
        fechaInicio: new Date(),
        fechaInscripcion: new Date(),
        horario: '',
        turno: '',
        estudiante: '',
        estudiantes: [],
        cursos: [],
        editing: false
    }

    async componentDidMount() {
        const resEs = await axios.get('http://localhost:4000/api/estudiantes');
        if (resEs.data.length > 0) {
            this.setState({
                estudiantes: resEs.data,
                estudiante:resEs.data[0].nombre
            })
        }
        const resCu = await axios.get('http://localhost:4000/api/cursos');
        if (resCu.data.length > 0) {
            this.setState({
                cursos: resCu.data,
                curso:resCu.data[0].cursoname
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedInscripcion = {
                fechaInicio: this.state.fechaInicio,
                fechaInscripcion: this.state.fechaInscripcion,
                horario: this.state.horario,
                turno: this.state.turno,
                estudiante: this.state.estudiante,
                curso: this.state.curso
            };
            await axios.put('http://localhost:4000/api/inscripciones/' + this.state._id, updatedInscripcion);
        } else {
            const newInscripcion = {
                curso: this.state.curso,
                fechaInicio: this.state.fechaInicio,
                fechaInscripcion: this.state.fechaInscripcion,
                horario: this.state.horario,
                turno: this.state.turno,
                estudiante: this.state.estudiante,
                
                };
            console.log(newInscripcion)
            axios.post('http://localhost:4000/api/inscripciones', newInscripcion);
        }
        //window.location.href = '/Inscripciones';

    }



    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    onChangeDate1 = fechaInscripcion => {
        this.setState({ fechaInscripcion });
    }
    onChangeDate2 = fechaInicio => {
        this.setState({ fechaInicio });
    }
    render() {
        return (
            <div className="card text-white bg-secondary mb-3">
                <div className="card-header">Registro inscripción</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>
                                    Fecha de inscripción
                                </label>
                                <div>
                                    <DatePicker classNameName="form-control" selected={this.state.fechaInscripcion} onChange={this.onChangeDate1} />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>
                                    Fecha de inicio
                                </label>
                                <div>
                                    <DatePicker classNameName="form-control" selected={this.state.fechaInicio} onChange={this.onChangeDate2} />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCorreo">Horario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="horario"
                                    onChange={this.onInputChange}
                                    value={this.state.horario}></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputCI">Turno</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="turno"
                                    onChange={this.onInputChange}
                                    value={this.state.turno}></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCelular">
                                    Estudiante
                                </label>
                                <select
                                    className="form-control"
                                    value={this.state.estudiante}
                                    onChange={this.onInputChange}
                                    name="estudiante"
                                    required>
                                    {
                                        this.state.estudiantes.map(estudiante => (
                                            <option key={estudiante.CI} value={estudiante.nombre}>
                                                {estudiante.nombre}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputCelular">
                                    Curso
                                </label>
                                <select
                                    className="form-control"
                                    value={this.state.curso}
                                    onChange={this.onInputChange}
                                    name="curso"
                                    required>
                                    {
                                        this.state.cursos.map(curso => (
                                            <option key={curso.cursocode} value={curso.cursoname}>
                                                {curso.cursoname}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-info">Crear inscripción</button>
                    </form>
                </div>
            </div>
        )
    }
}
