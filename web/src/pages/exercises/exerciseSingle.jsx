import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getExercise } from '../../services/api.service';
import { useNavigate } from 'react-router-dom';

function Exercise() {
    const { id } = useParams();
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchExercise() {
            try {
                const { data } = await getExercise(id);
                setExercise(data);
                setLoading(false);
            } catch (error) {
                if (error.response?.status === 404) {
                    navigate('/');
                } else {
                    setError('Error al cargar el ejercicio. Por favor, inténtalo de nuevo más tarde.');
                    setLoading(false);
                }
            }
        }

        fetchExercise();

        return () => {
            setExercise(null);
            setLoading(true);
            setError(null);
        };
    }, [id, navigate]);

    if (loading) {
        return <div> <i className="fa fa-spinner" aria-hidden="true"></i>
        Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!exercise) {
        return <div>No se encontró el ejercicio.</div>;
    }

    return (
        <div className='exercise-container'>
            <h3>{exercise.name}</h3>
            <p className="mb-1"> <i className="fa fa-circle" aria-hidden="true"></i>n{exercise.description}</p>
        </div>
    );
}

export default Exercise;
