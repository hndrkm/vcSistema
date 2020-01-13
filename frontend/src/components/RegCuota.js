import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Regcuota extends Component {
    render() {
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Cuota</h5>
                    <div className="card-text ">Inscripcion:
                <select id="inputState" class="form-control">
                            <option selected>Inscripcion...</option>
                            <option>inscripcion 1</option>
                            <option>inscripcion 2</option>
                            <option>inscripcion 3</option>
                            <option>inscripcion 4</option>
                            <option>inscripcion 5</option>
                            <option>inscripcion 6</option>

                        </select>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Numero de recibo</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="..." />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Numero de factura</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Acuenta</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">saldo</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">total</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">fecha</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="..." />
                        </div>
                    </form>
                    <div>
                        <Link to="/" className="btn btn-secondary btn-block">registrar Cuota</Link>
                    </div>
                </div>
            </div >
        );
    }
}