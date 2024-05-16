import RoutineItem from "../routine-item/routine-item";
import { myRoutines } from "../../../services/api.service";
import { useEffect, useState } from "react";

function MyRoutinesList() {
    const [userRoutines, setUserRoutines] = useState([]);

    useEffect(() => {
        async function fetchMyRoutines() {
            try {
                const myRoutinesResponse = await myRoutines();
                setUserRoutines(myRoutinesResponse.data);
            } catch (error) {
                console.error('Error al obtener las rutinas del usuario:', error);
                
            }
        }
    
        fetchMyRoutines();
    }, []);

    return (
        <div className="myroutines-list-container">
            <h1>Mis Rutinas</h1>
            <div className="row row-columns-3">
                {routines.map(routine => (
                    <div key={routine._id} className="col">
                        <RoutineItem routine={routine} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyRoutinesList;
