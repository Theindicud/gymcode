import { Link, useNavigate, useParams } from "react-router-dom";
import VideoHomeSection from "../components/videoHomeSection/videoHomeSection";
import RoutinesList from "../components/routines/routines-list/routines-list";
import AutocompleteInput from "../components/google/autocomplete/autocomplete-input";

function Home() {

    const navigate = useNavigate();

    const handlePlaceChange = (location) => {
        
    }

    return (
        <>
            <VideoHomeSection />
            <AutocompleteInput className="mb-1" onPlaceChange />
            <h2>Nuestras mejores rutinas</h2>
            <RoutinesList limit={4}/>
            
           
        </>
    )


}

export default Home;