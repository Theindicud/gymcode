import './videoHomeSection.css';

function VideoHomeSection() {

    return (
        <div className="videoHome-container">
            <video src="/videos/videoFitness.mp4" autoPlay loop muted  type="video/mp4"/>
            <h1>EMPIEZA HOY</h1>
            <p>Nunca te arrepentirás</p>
        </div>
    )
}

export default VideoHomeSection;


