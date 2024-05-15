import "./videoHomeSection.css";
import AuthContext from "../../contexts/auth.context";
import { useContext } from "react";

function VideoHomeSection() {
  const { user } = useContext(AuthContext);

  return (
    <div className="videoHome-container">
      <video
        src="/videos/videoFitness.mp4"
        autoPlay
        loop
        muted
        type="video/mp4"
      />

      {user ? (
        <>
            <h1>NO TE RINDAS</h1>
            <p>Cada día importa</p>
        </>
      ) : (
        <>
            <h1>EMPIEZA HOY</h1>
            <p>Nunca te arrepentirás</p>
        </>
      )}
    </div>
  );
}

export default VideoHomeSection;
