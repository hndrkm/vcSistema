import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends Component {
    render() {
        return (
            <div>

                <div className="card  text-white bg-dark ">
                    <div className="card-body">
                        <h5 className="card-title">Estudiantes</h5>
                        <Link to="/Estudiantes" className="btn btn-secondary btn-block">Estudiantes</Link>
                        <Link to="/createEstudiante" className="btn btn-secondary btn-block">Crear Estudiante</Link>

                    </div>
                </div>
                <div className="card  text-white bg-dark ">
                    <div className="card-body">
                        <h5 className="card-title">Cursos</h5>
                        <Link to="/cursos" className="btn btn-secondary btn-block">Ver</Link>
                    </div>
                </div>
                <div className="card  text-white bg-dark ">
                    <div className="card-body">
                        <h5 className="card-title">Inscripciones</h5>
                        <Link to="/inpC" className="btn btn-secondary btn-block">Ver Por Cursos</Link>
                        <button type="button" class="btn btn-secondary btn-block">Ver</button>
                        <button type="button" class="btn btn-secondary btn-block">Agregar</button>
                    </div>
                </div>

                <div className="card  text-white bg-dark ">
                    <div className="card-body">
                        <h5 className="card-title">Caja</h5>
                        <Link to="/caja" className="btn btn-secondary btn-block">abrir caja</Link>
                        <Link to="/cajaDetalle" className="btn btn-secondary btn-block">Ver caja hoy</Link>
                    </div>
                </div>

                <div className="card  text-white bg-dark ">
                    <div className="card-body">
                        <h5 className="card-title">Productos</h5>
                        <Link to="/productos" className="btn btn-secondary btn-block">ver</Link>

                    </div>
                </div>


            </div>

        );
    }
}