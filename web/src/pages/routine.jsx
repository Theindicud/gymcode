import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoutine } from '../services/api.service';

function Routine() {
    const { id } = useParams();
    const [routine, setRoutine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRoutine() {
            try {
                const { data } = await getRoutine(id);
                setRoutine(data);
                setLoading(false);
            } catch (error) {
                if (error.response?.status === 404) {
                    navigate('/')
                } else {
                    setError('Error al cargar la rutina. Por favor, inténtalo de nuevo más tarde.')
                    setLoading(false)
                }
            }
        }
        fetchRoutine();
    
        return () => {
            setRoutine(null);
            setLoading(true);
            setError(null);
        };
    }, [id, navigate]);

    if (loading) {
        return <div> <i class="fa fa-spinner" aria-hidden="true"></i>Cargando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (!routine) {
        return <div>No se encontró la rutina.</div>;
    }

    return (
        <div className='routine-container'>
        <h3>{routine.name}</h3>
        <p className="mb-1"> <i class="fa fa-circle" aria-hidden="true"></i>n{routine.description}</p>
    </div>
    );

}

export default Routine;