import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Menu extends Component {
    render() {
        return (
            <div>
                <div class="card-group">
                    <div className="card  text-white bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Estudiantes</h5>
                            <Link to="/Estudiantes" className="btn btn-secondary btn-block">Estudiantes</Link>
                            <Link to="/createEstudiante" className="btn btn-secondary btn-block">Crear Estudiante</Link>
                            
                        </div>
                    </div>
                    <div className="card  text-white bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Cursos</h5>
                            <button type="button" class="btn btn-secondary btn-block">Ver</button>
                            <button type="button" class="btn btn-secondary btn-block">Agregar</button>
                        </div>
                    </div>
                    <div className="card  text-white bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Inscripciones</h5>
                            <Link to="/inpC" className="btn btn-secondary btn-block">Ver Por Cursos</Link>
                            <button type="button" class="btn btn-secondary btn-block">Ver</button>
                            <button type="button" class="btn btn-secondary btn-block">Agregar</button>
                        </div>
                    </div>
                </div>
                <div class="card-group">
                    <div className="card  text-white bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Caja</h5>
                            <button type="button" class="btn btn-secondary btn-block">ver</button>
                            <Link to="/caja" className="btn btn-secondary btn-block">iniciar caja</Link>
                        </div>
                    </div>

                    <div className="card  text-white bg-dark mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Productos</h5>
                            <button type="button" class="btn btn-secondary btn-block">Listar</button>
                            <button type="button" class="btn btn-secondary btn-block">Agregar</button>
                        </div>
                    </div>
                    <div className="card  text-white bg-dark mb-3">

                        <div className="card-body">
                            <h5 className="card-title">Reportes</h5>
                            <button type="button" class="btn btn-secondary btn-block">Generar reporte</button>
                            <Link to="/" className="btn btn-secondary btn-block">Agregar</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}