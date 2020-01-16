import React, { Component } from 'react'
import axios from 'axios'
export default class caja extends Component {
    state = {
        today: new Date(),
        monto: 0,
        fechaT: "",
        usuario: "",
        productos: [],
        producto: '',
        total:0,
        cantidad:0,
    }
    async componentDidMount() {
        const res = await axios.get('/api/caja/cajaF');
        console.log(res.data[0])
        const resP = await axios.get('/api/productos');
        if (resP.data.length > 0) {
            this.setState({
                productos: resP.data,
                producto: resP.data[0].nombre
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newIngreso = {
            cursocode: this.state.cursocode,
            cursoname: this.state.cursoname,
            tipo: this.state.tipo
        };
        await axios.post('/api/cursos', newIngreso);

    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>

                <div className="container text-white">
                    <h1>Administrar caja</h1>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Ingreso</th>
                                <th scope="col">Egreso</th>
                                <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="card text-white bg-dark">
                        <h3>Registro nuevo</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <label for="inputCelular">
                                        Producto
                                </label>
                                    <select
                                        className="form-control"
                                        value={this.state.curso}
                                        onChange={this.onInputChange}
                                        name="curso"
                                        required>
                                        {
                                            this.state.productos.map(producto => (
                                                <option key={producto.codigo} value={producto.nombre}>
                                                    nombre:{producto.nombre} precio:{producto.precioVenta}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputCorreo">Cantidad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cantidad"
                                        onChange={this.onInputChange}
                                        value={this.state.cantidad}></input>
                                </div>
                                <div className="form-group col-md-2">
                                <label >Monto:</label>
                                <input type="text" 
                                name="total" 
                                class="form-control" 
                                onChange={this.onInputChange}
                                value={this.state.total}></input>
                                </div>
                                <div className="form-group col-md-2">
                                <button type="submit" className="btn btn-primary">
                                Guardar
                                 </button>
                                </div>
                               
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        );
    }
}