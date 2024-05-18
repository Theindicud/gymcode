import { useRef, useEffect } from 'react';
import './map.css';
function Map({ className = '', center, markers }) {
    const mapRef = useRef();

    const customIcon = {
        url: 'https://res.cloudinary.com/dznumjlzc/image/upload/v1715967875/gymcode/map/marker_auom7c.png', 
        scaledSize: new window.google.maps.Size(60, 60), 
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(20, 40)
    };
    

    useEffect(() => {
        if (!window.google) {
            console.error("Google Maps API not loaded");
            return;
        }
        const googleMap = new window.google.maps.Map(mapRef.current, {
            center: {
                 lat: 40.4167, 
                 lng: -3.7033
            },
            zoom: 5.5
        });

        if (markers) {
            console.log(markers)
            markers.forEach(({ lat, lng, title }) => {
                new window.google.maps.Marker({
                    position: { lat, lng },
                    map: googleMap,
                    title: title,
                    icon: customIcon 
                });
            });

        }
    }, [center, markers]);


    return (
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} className={className}>Map</div>
    )
}


export default Map;
