import { useParams } from "react-router-dom";

function Routine() {
    const params = useParams();

    return <div>Routine {params.id}!</div>
}

export default Routine;