import { Link, useParams } from "react-router-dom";
import RoutinesList from "../components/routines/routines-list/routines-list";

function Home() {

    return (
        <>
            <h2>Nuestras mejores rutinas</h2>
            <RoutinesList limit={4}/>
           
        </>
    )


}

export default Home;