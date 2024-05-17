import { useEffect, useState } from "react";
import { getGyms } from "../../../services/api.service";


function GymList({ facilities, address, location, page, lat, lng, onUpdateGyms = '() => {}' }) {
    const [gyms, setGyms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGyms() {
            setLoading(true);
            try {
                const query = {};
                if (facilities) query.facilities = facilities;
                if (address) query.address = address;
                if (location) query.location = location;
                if (page) query.page = page;
                if (lat && lng) {
                    query.lat = lat;
                    query.lng = lng;
                }

                const { data: gyms } = await getGyms(query);
                setGyms(gyms);
                onUpdateGyms(gyms);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchGyms();
    }, [facilities, address, location, page, lat, lng]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='d-flex flex-column'>
            <div className="row">
                <ul> 
                    {gyms.map((gym) => (
                        <div key={gym.id} className="col">
                            <strong>{gym.title}</strong>: {gym.address}
                        </div>
                    ))}
                </ul> 
            </div>
        </div>
    );
    
}


export default GymList;