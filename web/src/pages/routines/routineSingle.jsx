import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoutine } from '../../services/api.service';
import RoutineDetail from '../../components/routines/routine-detail/routine-detail';

function Routine() {
    const { id } = useParams();
    const [routine, setRoutine] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRoutine() {
            try {
                const { data } = await getRoutine(id);
                setRoutine(data);
                setLoading(false)
            } catch (error) {
                if (error.response?.status == 404) {
                    navigate('/')
                }
            }
        }
        fetchRoutine();
    }, [id]);

    
    
    return (
        <section className='mt-20'>
            {loading ? (
                <p><i class="fa fa-spinner" aria-hidden="true"></i>Cargando...</p>
            ) : (
                <RoutineDetail {...routine} />
            )}
        </section>
    );

}

export default Routine;