import { Link, useParams } from "react-router-dom";
import RoutinesList from "../../components/routines/routines-list/routines-list";

function Routines() {
    const params = useParams();

    return (
        <div className="container-routines">
            <h1>Rutinas {params.id}</h1>
            <RoutinesList />
            
        </div>

    )
}

export default Routines;