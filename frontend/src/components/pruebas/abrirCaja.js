import React, { Component } from 'react'

export default class caja extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">codigo</th>
                            <th scope="col">descripcion</th>
                            <th scope="col">costo</th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                
            </div>

        );
    }
}