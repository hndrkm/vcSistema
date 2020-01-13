import axios from 'axios';
export default async function inscripcionesEstudiante() {
    const res = await axios.get('http://localhost:4000/api/inscripciones');
        if (res.data.length > 0) {
            return res.data.length;
        }
}
