import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
export default class CreateEstudiante extends Component {

    state = {
        CI: '',
        ext: '',
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        fechaNacimiento: new Date(),
        correoElectronico: '',
        telefonoFijo: 0,
        celular: 0,
        estudiantes: [],
        editing: false,

        curso: '',
        fechaInicio: new Date(),
        fechaInscripcion: new Date(),
        horario: '',
        turno: '',
        cuotas: '',
        precioMes:'',
        precioMatricula:'',
        estudiante: '',
        estudiantes: [],
        cursos: [],
        editing: false,

        codest:'',
        codcurso:''
    }

    async componentDidMount() {
        const resCu = await axios.get('http://localhost:4000/api/cursos');
        if (resCu.data.length > 0) {
            this.setState({
                cursos: resCu.data,
                curso: resCu.data[0].cursocode
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedEdtudiante = {
                CI: this.state.CI,
                nombre: this.state.nombre,
                apPaterno: this.state.apPaterno,
                apMaterno: this.state.apMaterno,
                fechaNacimiento: this.state.fechaNacimiento,
                correoElectronico: this.state.correoElectronico,
                telefonoFijo: this.state.telefonoFijo,
                celular: this.state.celular
            };
            await axios.put('http://localhost:4000/api/estudiantes/' + this.state._id, updatedEdtudiante);
        } else {
            const newEstudiante = {
                CI: this.state.CI,
                ext: this.state.ext,
                nombre: this.state.nombre,
                apPaterno: this.state.apPaterno,
                apMaterno: this.state.apMaterno,
                fechaNacimiento: this.state.fechaNacimiento,
                correoElectronico: this.state.correoElectronico,
                telefonoFijo: this.state.telefonoFijo,
                celular: this.state.celular
            };
            const newInscripcion = {
                curso: this.state.curso,
                fechaInicio: this.state.fechaInicio,
                fechaInscripcion: this.state.fechaInscripcion,
                horario: this.state.horario,
                turno: this.state.turno,
                estudiante: this.state.CI,
                cuotas: this.state.cuotas,
                precioMes: this.state.precioMes,
                precioMatricula: this.state.precioMatricula,
                };
            
            console.log(newInscripcion)
            axios.post('http://localhost:4000/api/inscripciones', newInscripcion);
            axios.post('http://localhost:4000/api/estudiantes', newEstudiante);
        }
        window.location.href = '/Estudiantes';

    }



    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    onChangeDate = fechaNacimiento => {
        this.setState({ fechaNacimiento });
    }


    onChangeDate1 = fechaInscripcion => {
        this.setState({ fechaInscripcion });
    }
    onChangeDate2 = fechaInicio => {
        this.setState({ fechaInicio });
    }
    render() {
        return (
            <div>
                <div className="card text-white bg-secondary mb-4">
                    <div className="card-header">Formulario registro estudiante</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label >Nombres</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onInputChange}
                                        name="nombre"
                                        value={this.state.title} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Apellido paterno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apPaterno"
                                        onChange={this.onInputChange}
                                        value={this.state.apPaterno} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label >Apellido materno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apMaterno"
                                        onChange={this.onInputChange}
                                        value={this.state.apMaterno} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="correoElectronico"
                                        onChange={this.onInputChange}
                                        value={this.state.correoElectronico}></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label >CI</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="CI"
                                        onChange={this.onInputChange}
                                        value={this.state.CI}></input>
                                </div>
                                <div className="form-group col-md-2">
                                    <label >exp</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ext"
                                        onChange={this.onInputChange}
                                        value={this.state.ext}></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Direccion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="" ></input>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label >Telefono Fijo</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="telefonoFijo"
                                        onChange={this.onInputChange}
                                        value={this.state.telefonoFijo}></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label >
                                        Celular
                                </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="celular"
                                        onChange={this.onInputChange}
                                        value={this.state.celular}></input>
                                </div>
                            </div>
                            {/* Fecha de nacimiento */}
                            <div className="form-group">
                                <label>
                                    Fecha de Nacimiento
                            </label>
                                <div>
                                    <DatePicker classNameName="form-control"
                                        selected={this.state.fechaNacimiento}
                                        onChange={this.onChangeDate} />
                                </div>
                                <br />
                            </div>
                        </form>
                    </div>

                    <div className="card-header">Registro inscripción</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">

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
                                                <option key={curso.cursocode} value={curso.cursocode}>
                                                    {curso.cursoname}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCorreo">Numero de cuotas</label>
                                    <input
                                        type="Number"
                                        className="form-control"
                                        name="cuotas"
                                        onChange={this.onInputChange}
                                        value={this.state.cuotas}></input>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCorreo">Precio Mes</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="precioMes"
                                        onChange={this.onInputChange}
                                        value={this.state.precioMes}></input>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCorreo">Precio Matricula</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="precioMatricula"
                                        onChange={this.onInputChange}
                                        value={this.state.precioMatricula}></input>
                                </div>
                            </div>
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



                            <button type="submit" className="btn btn-info">Crear inscripción</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
