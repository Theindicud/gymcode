import { Link, useParams } from "react-router-dom";
import MyRoutinesList from "../../components/routines/myroutines-list/myroutines-list";
import { myRoutines } from "../../services/api.service";
import './myRoutines.css';


function MyRoutines() {
    const params = useParams();

    return (
    <div  className="container-super-routine">
        <div className="super-container">
            <h1> Mis rutinas {params.id}</h1>
            <div className="routines-container">
                <MyRoutinesList/>        
            </div>
        </div>
    </div>
    )
}


export default MyRoutines;