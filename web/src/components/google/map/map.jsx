import { useRef, useEffect } from 'react';
function Map({ className = '', center, markers }) {
    const mapRef = useRef();

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
            zoom: 6
        });

        if (markers) {
            markers.forEach(({ lat, lng, title }) => {
                new window.google.maps.Marker({
                    position: { lat, lng },
                    map: googleMap,
                    title: title

                });
            });

        }
    }, [center, markers]);


    return (
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} className={className}>Map</div>
    )
}


export default Map;
