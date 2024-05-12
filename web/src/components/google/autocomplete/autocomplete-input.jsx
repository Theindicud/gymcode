import { useEffect, useRef } from "react"

const autocompleteOptions = {
    componentRestrictions: { country: "es" },
    type: ["gym"]
  };

function AutocompleteInput({ className, onPlaceChange }) {
    const autocompleteInputRef = useRef();
    
    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInputRef.current, autocompleteOptions);
        window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            if (place && place.geometry?.location) {
                const location = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng(), address: place.formatted_address };
                onPlaceChange(location);           
            }
        })

        return () => {
            window.google.maps.event.clearListeners(autocomplete, 'place_changed');
        }
    }, []);

    
    return (
        <div className={`form-floating ${className}`}>
            <input ref={autocompleteInputRef} type="text" className="form-control" id="autocomplete-input" placeholder="" />
            <label htmlFor="autocomplete-input">Busca los gimnasios de nuestros entrenadores más cercanos</label>
        </div>
    )
}

AutocompleteInput.defaultProps = {
    className: "",
    onPlaceChange: (localStorage) => console.debug(location)
}

export default AutocompleteInput