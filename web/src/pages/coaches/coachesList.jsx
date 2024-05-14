import { Link, useParams } from "react-router-dom";
import CoachesList from "../../components/coaches/coaches-list/coaches-list";

function Coaches() {
    const params = useParams();

    return (
        <div className="container">
            <h1>Lista de Coaches</h1>
            <div className="coaches-list-container">
                <CoachesList/>
            </div>
        </div>
    )
}

export default CoachesList;
