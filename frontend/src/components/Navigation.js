import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                            assignment </i> Cursos VC
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/Menu" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/cursos" className="nav-link">Cursos</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/createInscripciones" className="nav-link">Inscripcion</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Inscripciones" className="nav-link">Inscripciones</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/flujo" className="nav-link">Inscribir</Link>
                            </li>
                        

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
