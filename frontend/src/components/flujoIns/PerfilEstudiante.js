import React, { Component } from 'react'
import inscripcionesEstudiante from '../../acciones/consultas'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class caja extends Component {

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
        _id: '',

        inscripciones: [],
    }
    async componentDidMount() {

        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)


            const res = await axios.get('http://localhost:4000/api/estudiantes/' + this.props.match.params.id);
            console.log(res.data)

            const res0 = await axios.get('http://localhost:4000/api/inscripciones');
            console.log(res0.data)
            var ins = [];
            for (var i in res0.data) {
                var insc = {};
                console.log(res0.data[i].estudiante)
                if (res0.data[i].estudiante === res.data.CI) {
                    insc = res0.data[i];
                    ins.push(insc);
                }
                console.log(ins);
            }
            this.setState({
                CI: res.data.CI,
                ext: res.data.ext,
                nombre: res.data.nombre,
                apPaterno: res.data.apPaterno,
                apMaterno: res.data.apMaterno,
                fechaNacimiento: new Date(),
                correoElectronico: res.data.correoElectronico,
                telefonoFijo: res.data.telefonoFijo,
                celular: res.data.celular,
                _id: res.data._id,
                editing: true,

                inscripciones: ins,
            });

        }
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-6">CI {this.state.CI}</h1>
                    <p className="lead">{this.state.nombre} {this.state.apPaterno} {this.state.apMaterno}</p>
                    <p className="lead">Correo: {this.state.correoElectronico} Celular: {this.state.celular} </p>
                </div>

                {this.state.inscripciones.map((inscrip) => {
                    if (inscrip.cuotas <= 0) {
                        return (
                            <div className="col-md-4 p-2" key={inscrip._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>{inscrip.curso}</h5>
                                        <Link to={"/edit/" + inscrip._id} className="btn btn-secondary">
                                            <i className="material-icons">
                                                border_color</i>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <p>precio Mes:</p>
                                        {inscrip.precioMes}
                                        <p>cuotas restantes:</p>
                                        {inscrip.cuotas}
                                    </div>
                                    <div className="card-footer">


                                        <button className="btn btn-danger" >
                                            Cerrar
                                            </button>
                                    </div>
                                </div>
                            </div>)
                    } else {
                        return (
                            <div className="col-md-4 p-2" key={inscrip._id}>
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5>{inscrip.curso}</h5>
                                        <Link to={"/edit/" + inscrip._id} className="btn btn-secondary">
                                            <i className="material-icons">
                                                border_color</i>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <p>precio Mes:</p>
                                        {inscrip.precioMes}
                                        <p>cuotas restantes:</p>
                                        {inscrip.cuotas}
                                    </div>
                                    <div className="card-footer">

                                        <Link to={"/cuota/" + inscrip._id} class="btn btn-primary">Pagar Cuota</Link>
                                        <button className="btn btn-danger" >
                                            Cerrar
                                    </button>
                                    </div>
                                </div>
                            </div>)
                    }
                })

                }

            </div>


        );
    }
}