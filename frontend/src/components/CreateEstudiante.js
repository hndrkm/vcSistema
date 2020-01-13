import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
export default class CreateEstudiante extends Component {

    state = {
        CI: '',
        nombre: '',
        apPaterno: '',
        apMaterno: '',
        fechaNacimiento: new Date(),
        correoElectronico: '',
        telefonoFijo: 0,
        celular: 0,
        estudiantes: [],
        editing: false
    }

    async componentDidMount() {
        
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
                nombre: this.state.nombre,
                apellidos: this.state.apellidos,
                fechaNacimiento: this.state.fechaNacimiento,
                correoElectronico: this.state.correoElectronico,
                telefonoFijo: this.state.telefonoFijo,
                celular: this.state.celular
            };
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
    render() {
        return (
            <div className="card text-white bg-secondary mb-3">
                 <div className="card-header">Formulario registro estudiante</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Nombres</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    onChange={this.onInputChange}
                                    name="nombre"
                                    value={this.state.title}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Apellido paterno</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="apPaterno"
                                    onChange={this.onInputChange} 
                                    value={this.state.apPaterno}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Apellido materno</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="apMaterno"
                                    onChange={this.onInputChange} 
                                    value={this.state.apMaterno}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCorreo">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="correoElectronico"
                                    onChange={this.onInputChange} 
                                    value={this.state.correoElectronico}></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputCI">CI</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="CI"
                                    onChange={this.onInputChange} 
                                    value={this.state.CI}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Direccion</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputAddress" 
                                placeholder="" ></input>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputTelefono">Telefono Fijo</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    name="telefonoFijo"
                                    onChange={this.onInputChange} 
                                    value={this.state.telefonoFijo}></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputCelular">
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
                        <div classNameName="form-group">
                            <label>
                                    Fecha de Nacimiento
                            </label>
                            <div>
                            <DatePicker classNameName="form-control" selected={this.state.fechaNacimiento} onChange={this.onChangeDate} />
                            </div>
                            <br/>
                        </div>
                        <button type="submit" className="btn btn-info">Crear Estudiante</button>
                    </form>
                </div>
            </div>
        )
    }
}
