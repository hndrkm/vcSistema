import React, { Component } from 'react'
import axios from 'axios'

export default class CreateProducto extends Component {

    state = {
        codigo: '',
        nombre: '',
        precioVenta: '',
        precioDistribuidor:'',
        productos: []
    }

    async componentDidMount() {
        this.getProductos();
    }

    getProductos = async () => {
        const res = await axios.get('/api/productos');
        this.setState({
            productos: res.data
        });
    }

    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const newProducto = {
            codigo: this.state.codigo,
            nombre: this.state.nombre,
            precioVenta: this.state.precioVenta,
            precioDistribuidor: this.state.precioDistribuidor,
        };
        await axios.post('/api/productos', newProducto);
        this.setState({ 
            codigo: '',
            nombre: '',
            precioVenta:'',
            precioDistribuidor:''
         });
        this.getProductos();
    }

    deleteProducto = async (cursoId) => {
        const response = window.confirm('esta seguro de eliminar el curso?');
        if (response) {
            await axios.delete('/api/productos/' + cursoId);
            this.getProductos();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear nuevo Producto</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Codigo</label>
                                <input
                                    className="form-control"
                                    value={this.state.codigo}
                                    type="text"
                                    onChange={this.onInputChange}
                                    name="codigo"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    value={this.state.nombre}
                                    onChange={this.onInputChange} 
                                    name="nombre" 
                                    />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Precio Venta</label>
                                <input 
                                    type="number" 
                                    class="form-control"
                                    value={this.state.precioVenta}
                                    onChange={this.onInputChange} 
                                    name="precioVenta" 
                                    />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Precio distribuidor</label>
                                <input 
                                    type="number" 
                                    class="form-control"
                                    value={this.state.precioDistribuidor}
                                    onChange={this.onInputChange} 
                                    name="precioDistribuidor" 
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.productos.map(producto => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={producto._id}>
                                    {producto.nombre}-
                                    {producto.precioVenta}
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                    <button className="btn btn-danger" onClick={() => this.deleteProducto(producto._id)}>
                                        Borrar
                                    </button>
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
