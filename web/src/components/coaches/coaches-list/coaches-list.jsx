import { useEffect, useState } from "react";
import { getAllCoaches} from "../../../services/api.service";
import CoachItem from "../coach-item/coach-item";
import { Link } from "react-router-dom";
import './coaches-list.css';

function CoachesList({ name, lastName, photo, limit, page}) {
    const [coaches, setCoaches] = useState([]);

    useEffect(() => 
    async function fetchCoaches() {
        try {
            const query = {};
            if (name) query.name = name;
            if (lastName) query.lastName = lastName;
            if (photo) query.photo = photo;
            if (limit) query.limit = limit;
            if (page) query.page = page;

            const response = await getAllCoaches(query);
            setCoaches(response.data);
        } catch (error) {
            console.error(error);
        }

        fetchCoaches();
    },[name, lastName, photo, limit]);

    return (
        <>
        <div className="coaches-list-container">
            <div className="row row-columns-3">
                {coaches.map((coach) => (
                    <Link to={`/coaches/${coach.id}`} className="coach-card-link">
                        <CoachItem coach={coach} />
                    </Link>
                
                ))}
            </div>
        </div>
        </>
    );
    
}

export default CoachesList;