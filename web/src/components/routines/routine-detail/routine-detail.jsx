import './routine-detail.css';
import { Link } from 'react-router-dom';
import { myRoutines } from "../../../services/api.service";


function RoutineDetail({ name, description, difficulty, routineType, exercises, owner, subscriber}) {

    const handleSubscribe = async () => {
        try {
            await myRoutines(subscriber); 
            alert('¡Te has suscrito a la rutina con éxito!');
        } catch (error) {
            console.error('Error al suscribirse a la rutina:', error);
            alert('Hubo un error al suscribirse a la rutina. Por favor, inténtalo de nuevo más tarde.');
           
        }
    };
    return (
        <section>
            <div className='routine-detail-container m-3'>
                <h2>{name}</h2>

                <p>{description}</p>
                <p>{difficulty}</p>
                <p>{routineType}</p>
                <p>{owner.name}</p>

                {exercises.map(e => 
                    (<div>
                        <p>{e.exercise.name}</p>
                        <section>{e.equipment.map(equipment => <div className="rounded-pill bg-black text-white text-center">{equipment}</div>)}</section>

                        <p>{e.series}</p>
                        <p>{e.repetitions}</p>
                        <p>{e.weight}</p>
                    </div>)
                )}

            <Link to="/myroutines"> 
                <button onClick={handleSubscribe}>Suscríbete</button>
            </Link>

            </div>
        </section>
    )

}

export default RoutineDetail;