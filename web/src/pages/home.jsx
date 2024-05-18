import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import VideoHomeSection from "../components/videoHomeSection/videoHomeSection";
import RoutinesListHome from "../components/routines/routines-list-home/routines-list-home";
import AutocompleteInput from "../components/google/autocomplete/autocomplete-input";
import Map from "../components/google/map/map";
import GymList from "../components/gyms/gym-list-home/gym-list-home";
import { useState } from 'react';
import CoachesCarousel from "../components/coaches/coaches-carousel/coaches-carousel";
import "./home.css"

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
            <VideoHomeSection className="mb-2" />
            <div className="filter-map-list-container-father d-flex">
                <div className="filter-map-list-head">
                    <div className="filter-map-list-title"><h1>Mapa Fitness</h1></div>
                    <div className="filter-map-list-subtitle"><h1>Explora tus opciones</h1></div>
                </div>
                <div className="filter-map-list-container-child">        
                    <div className="filter-map-home">
                        <AutocompleteInput onPlaceChange={handlePlaceChange} />
                        <Map center={{ lat: parseFloat(lat), lng: parseFloat(lng) }} markers={locations} />
                    </div>
                    <div className="gymlist-home">
                        <GymList lat={lat} lng={lng} onUpdateGyms={handleGymsUpdate} />
                    </div>
                </div>
            </div>
            <RoutinesListHome limit={3} />
            <CoachesCarousel limit={4} className="mb-4" />
        </>
    )
}

export default Home;
