import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class RegIngresos extends Component {
    render() {
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Ingreso</h5>
                    <div className="card-text ">Tipo:
                <select id="inputState" class="form-control">
                            <option selected>tipo de Ingreso...</option>
                            <option>Cuota de inscripcion</option>
                            <option>Venta de producto</option>
                            <option>otro</option>

                        </select>
                    </div>
                    <div className="card-text ">Cuenta:
                <select id="inputState" class="form-control">
                            <option selected>Nuemero de cuenta...</option>
                            <option>cuenta 1</option>
                            <option>cuenta 2</option>
                            <option>cuenta 3</option>

                        </select>
                    </div>
                    <Link to="/cuotas" className="btn btn-secondary btn-block">Agregar Cuota</Link>
                    <Link to="/" className="btn btn-secondary btn-block">Agregar producto</Link>
                </div>
            </div >
        );
    }
}