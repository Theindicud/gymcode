import { Link, useParams } from "react-router-dom";
import RoutinesList from "../../components/routines/routines-list/routines-list";
import './routinesList.css'

function Routines() {
    const params = useParams();

    return (
        <div  className="container-super-routine">
        <div className="super-container">
            <h1>Rutinas {params.id}</h1>

            <div className="routines-container">
                <RoutinesList />
                
            </div>
        </div>
        </div>
    )
}

export default Routines;