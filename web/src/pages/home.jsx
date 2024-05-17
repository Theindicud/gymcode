import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import VideoHomeSection from "../components/videoHomeSection/videoHomeSection";
import RoutinesListHome from "../components/routines/routines-list-home/routines-list-home";
import AutocompleteInput from "../components/google/autocomplete/autocomplete-input";
import Map from "../components/google/map/map";
import GymList from "../components/gyms/gym-list/gym-list";
import { useState } from 'react';
import CoachesCarousel from "../components/coaches/coaches-carousel/coaches-carousel";

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
            <GymList lat={lat} lng={lng} onUpdateGyms={handleGymsUpdate}/>
            <RoutinesListHome limit={3}/>
            <CoachesCarousel limit ={4} className="mb-4" />
        </>
    )
}

export default Home;
