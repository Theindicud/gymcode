import { Link, useParams } from "react-router-dom";
import MyRoutinesList from "../../components/routines/myroutines-list/myroutines-list";
import { myRoutines } from "../../services/api.service";


function MyRoutines() {
    const params = useParams();

    return (
        <div className="container-routines">
            <h1>Mis rutinas {params.id}</h1>
            <MyRoutinesList />
            
        </div>

    )
}


export default MyRoutines;