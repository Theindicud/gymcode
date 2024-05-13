import { useEffect, useState } from "react";
import { getGyms } from "../../../services/api.service";
import GymItem from "../gym-item/gym-item";
import { Link } from "react-router-dom";


function GymList({ facilities, address, location, page, lat, lng, onUpdateGyms }) {
    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const query = {};
                if (facilities) query.facilities = facilities
                if (address) query.address = address
                if (location) query.location = location
                if (limit) query.limit = limit;
                if (page) query.page = page;
                if (lat && lng) {
                    query.lat = lat;
                    query.lng = lng;
                }

                const { data: gyms } = await getGyms(query);
                setGyms(gyms);
                onUpdateGyms(gyms);
            } catch (error) {
                console.error(error);
            }
        }
        fetch()
    }, [facilities, address, location, page, lat, lng])
}

return (
    <div className='d-flex flex-column gap-2'>
        <div className="row row-cols-5 g-2">
            {gyms.map((gym) =>
                <div key={gym.id} className="col"> <GymItem gym={gym} /></div>)}
        </div>
    </div>
)


GymsList.defaultProps = {
    onUpdateGyms: () => {}
}

export default GymList;