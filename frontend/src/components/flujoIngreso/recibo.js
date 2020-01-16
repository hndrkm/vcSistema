import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PdfContainer from './toPdf';
import Doc from './DocService';
export default class RegIngresos extends Component {
    createPdf = (html) => Doc.createPdf(html);
    render() {
        return (
            <div className="container">
                <PdfContainer createPdf={this.createPdf}>
                <div class="card">
                    <div class="card-header">

                        <div class="text-center">
                            <h2>Formulario de inscripcion</h2>
                            </div>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Datos personales</h5>
                        <p class="card-text">Nombre.</p>
                        <p class="card-text">Curso.</p>
                        <p class="card-text">horario.</p>
                        <p class="card-text">turno.</p>
                        <p class="card-text">correo electtronico.</p>
                        
                    </div>
                    <div class="card-footer text-muted">
                        copia para vc
                    </div>
                </div >
                <div class="card">
                    <div class="card-header">

                        <div class="text-center">
                            <h2>Formulario de inscripcion</h2>
                            </div>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Datos personales</h5>
                        <p class="card-text">Nombre.</p>
                        <p class="card-text">Curso.</p>
                        <p class="card-text">horario.</p>
                        <p class="card-text">turno.</p>
                        <p class="card-text">correo electtronico.</p>
                        
                    </div>
                    <div class="card-footer text-muted">
                        copia para cliente
                    </div>
                </div >
                </PdfContainer>
            </div>
        );
    }
}