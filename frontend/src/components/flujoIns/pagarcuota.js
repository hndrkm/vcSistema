import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class caja extends Component {

    state = {
        inscripcion: '',
        curso: '',
        estudiante: '',
        fecha: new Date(),
        cuenta: 'cuenta1',
        precio: '',


        fechaInicio: new Date(),
        fechaInscripcion: new Date(),
        horario: '',
        turno: '',
        cuotas2: 0,
        precioMes: '',
        precioMatricula: '',


        cuotas: [],
        editing: false,
        _id: '',
        inscripciones: [],
    }
    async componentDidMount() {

        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)


            const res = await axios.get('http://localhost:4000/api/inscripciones/' + this.props.match.params.id);
            console.log(res.data)
            const res1 = await axios.get('http://localhost:4000/api/cuotas');
            console.log(res1.data)
            var cuotas1 = [];
            for (var i in res1.data) {
                var insc = {};
                console.log(res1.data[i].estudiante)
                if (res1.data[i].inscripcion == this.props.match.params.id) {
                    insc = res1.data[i];
                    cuotas1.push(insc);
                }
                console.log(cuotas1);
            }
            {

            }
            this.setState({
                fechaInicio: res.data.fechaInicio,
                fechaInscripcion: res.data.fechaInscripcion,
                horario: res.data.horario,
                turno: res.data.turno,
                cuotas2: res.data.cuotas,
                precioMes: res.data.precioMes,
                precioMatricula: res.data.precioMatricula,

                curso: res.data.curso,
                estudiante: res.data.estudiante,
                inscripcion: res.data._id,
                fecha: Date.now(),
                precio: res.data.precioMes,
                _id: res.data._id,
                cuotas: cuotas1,
                editing: true,
            });

        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newCuota = {
            estudiante: this.state.estudiante,
            curso: this.state.curso,
            inscripcion: this.state.inscripcion,
            cuenta: this.state.cuenta,
            fecha: this.state.fecha,
            precio: this.state.precio
        };
        var calc=parseInt(this.state.cuotas2)-1;
        console.log(calc);
        const updatedInscripcion = {
            curso: this.state.curso,
            fechaInicio: this.state.fechaInicio,
            fechaInscripcion: this.state.fechaInscripcion,
            horario: this.state.horario,
            turno: this.state.turno,
            estudiante: this.state.estudiante,
            cuotas: calc,
            precioMes: this.state.precioMes,
            precioMatricula: this.state.precioMatricula,
        };
        await axios.put('http://localhost:4000/api/inscripciones/' + this.state._id, updatedInscripcion);
        await axios.post('http://localhost:4000/api/cuotas', newCuota);


    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = fecha => {
        this.setState({ fecha });
    }
    render() {
        return (
            <div>
                <h1>Cuotas</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">fecha</th>
                            <th scope="col">precio MES</th>
                            <th scope="col">curso</th>
                            <th scope="col">cuenta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cuotas.map(cuota => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{cuota.fecha}</td>
                                    <td>{cuota.precio}</td>
                                    <td>{cuota.curso}</td>
                                    <td>{cuota.cuenta}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <form onSubmit={this.onSubmit}>
                    <select
                        className="form-control"
                        value={this.state.cuenta}
                        onChange={this.onInputChange}
                        name="cuenta"
                        required>
                        <option key='1' value='cuenta1'>
                            cuenta 1
                                    </option>
                        <option key='2' value='cuenta2'>
                            cuenta 2
                                    </option>
                        <option key='3' value='cuenta3'>
                            cuenta 3
                                    </option>
                    </select>
                    <button className="btn btn-primary">
                        Pagar
                </button>


                </form>

            </div>


        );
    }
}