import React, { Component } from 'react'
import axios from 'axios'
export default class caja extends Component {
    state = {
        today: new Date(),
        monto: 0,
        fechaT: "",
        usuario: "",
        cajacode: ""
    }
    async componentDidMount() {
        this.setState({
            fechaT: this.state.today.getDate()+'/'+this.state.today.getMonth()+1+'/'+this.state.today.getFullYear(),
            usuario: 'normal',
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const newCaja = {
            cajacode: this.state.fechaT + '-' + this.state.monto + '-' + this.state.usuario,
            fecha: this.state.today,
            fechaT: this.state.fechaT,
            usuario: this.state.usuario,
            montoInicial: this.state.monto,
        };
        await axios.post('/api/caja', newCaja);
        window.location.href = '/cajaDetalle';
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Administrar caja</h1>
                        <p className="lead text-muted">Introdusca un monto para iniciar caja.</p>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Monto de inicio</label>
                                <div className="col-sm-10">
                                    <input type="number"
                                        class="form-control"
                                        value={this.state.monto}
                                        onChange={this.onInputChange}
                                        name="monto"
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Fecha:</label>
    <label className="col-sm-2 col-form-label">{this.state.today.toLocaleDateString()}</label>
                                <label className="col-sm-2 col-form-label">Monto:</label>
                                <label className="col-sm-2 col-form-label">{this.state.monto}</label>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Abrir caja</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        );
    }
}