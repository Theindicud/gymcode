import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoutine } from '../../services/api.service';
import RoutineDetail from '../../components/routines/routine-detail/routine-detail';
import './routineSingle.css'


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
        <section className='mt-20 routine-section'>

            <h1>Detalles de la Rutina</h1>


            <div className='container-routines'>
            {loading ? (
               <div class="spinner-border text-primary" role="status">
               <span class="sr-only">Cargando...</span>
             </div>
            ) : (
                <RoutineDetail {...routine} />
            )}
            </div>
        </section>
    );

}

export default Routine;