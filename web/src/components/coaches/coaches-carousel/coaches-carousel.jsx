import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { getAllCoaches } from "../../../services/api.service";

function CoachesCarousel( name, lastName, photo, limit, page ) {
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
        <Carousel showArrows={true} showThumbs={false}>
            {coaches.map((coach) => (
                <div key={coach.id}>
                    <p className="legend">{`${coach.name} ${coach.lastName}`}</p>
                </div>
            ))}

        </Carousel>
    )
}

export default CoachesCarousel;