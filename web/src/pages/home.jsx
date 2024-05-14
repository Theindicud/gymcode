import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import VideoHomeSection from "../components/videoHomeSection/videoHomeSection";
import RoutinesList from "../components/routines/routines-list/routines-list";
import AutocompleteInput from "../components/google/autocomplete/autocomplete-input";
import Map from "../components/google/map/map";
import { useState } from 'react';
import GymList from "../components/gyms/gym-list/gym-list";

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [locations, setLocations] = useState([]);

    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const address = searchParams.get('address');

    const handlePlaceChange = ({ lat, lng, address }) => {

        setSearchParams({
            lat,
            lng,
            address
        });

    }


    const handleGymsUpdate = (gyms) => {
        const locations = gyms.map(({ name, location }) => ({
           title: name,
           lat: location[0],
           lng: location[1] 
        }));
        setLocations(locations);
    }

    return (
        <>
            <VideoHomeSection />
            <AutocompleteInput className="mb-1" onPlaceChange={handlePlaceChange} />
            <Map className="mb-3" center={{ lat: parseFloat(lat), lng: parseFloat(lng) }} markers={locations} />
            <GymList lat={lat} lng={lng} onUpdateGyms={handleGymsUpdate} />
            <h2>Nuestras mejores rutinas</h2>
            <RoutinesList limit={4}/>
        </>
    )
}

export default Home;
