import { useEffect, useState } from "react";
import { getRoutines } from "../services/api.service";

function Home() {
    const [routines, setRoutines] = useState(null);

    useEffect(() => {
        getRoutines().then((response) => {
            setRoutines(response.data)
        });
    }, []);

    if (!routines) {
        return <div>Cargando...</div>;
    }


}

export default Home;