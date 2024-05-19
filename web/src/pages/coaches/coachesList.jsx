import { Link, useParams } from "react-router-dom";
import CoachesList from "../../components/coaches/coaches-list/coaches-list";
import './coachesList.css';

function Coaches() {
    const params = useParams();

    return (
        <div  className="container-super-coach">
            <div className="super-container-coach">
                <h1>Nuestros entrenadores {params.id}</h1>

                <div className="coaches-container">
                    <CoachesList />
                    
                </div>
            </div>
        </div>
    )
}

export default Coaches;
