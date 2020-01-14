import React, { Component } from 'react'
import axios from 'axios'

export default class CreateCurso extends Component {

    state = {
        cursocode: '',
        cursoname: '',
        tipo: '',
        cursos: []
    }

    async componentDidMount() {
        this.getCursos();
    }

    getCursos = async () => {
        const res = await axios.get('/api/cursos');
        this.setState({
            cursos: res.data
        });
    }

    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const newCurso = {
            cursocode: this.state.cursocode,
            cursoname: this.state.cursoname,
            tipo: this.state.tipo
        };
        await axios.post('/api/cursos', newCurso);
        this.setState({ 
            cursoname: '',
            cursocode: '',
            tipo:''
         });
        this.getCursos();
    }

    deleteCurso = async (cursoId) => {
        const response = window.confirm('esta seguro de eliminar el curso?');
        if (response) {
            await axios.delete('/api/cursos/' + cursoId);
            this.getCursos();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear nuevo Curso</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <label for="exampleInputEmail1">Codigo</label>
                                <input
                                    className="form-control"
                                    value={this.state.cursocode}
                                    type="text"
                                    onChange={this.onInputChange}
                                    name="cursocode"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    value={this.state.cursoname}
                                    onChange={this.onInputChange} 
                                    name="cursoname" 
                                    />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Tipo</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    value={this.state.tipo}
                                    onChange={this.onInputChange} 
                                    name="tipo" 
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
                            this.state.cursos.map(curso => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={curso._id}>
                                    {curso.cursoname}
                                    >
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                    <button className="btn btn-danger" onClick={() => this.deleteCurso(curso._id)}>
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
