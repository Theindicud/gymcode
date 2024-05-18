import { useEffect, useRef } from "react";
import './autocomplete-input.css';

const autocompleteOptions = {
  componentRestrictions: { country: "es" },
  type: ["address"],
};

function AutocompleteInput({ className = "", onPlaceChange ="(location) => console.debug(location)" }) {
  const autocompleteInputRef = useRef();

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInputRef.current,
      autocompleteOptions
    );

    window.google.maps.event.addListener(autocomplete, "place_changed", () => {
      const place = autocomplete.getPlace();

      if (place && place.geometry?.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address,
        };

        onPlaceChange(location);
      } else {
        console.warn("Invalid location data from AutocompleteInput");
      }
    });

    return () => {
      window.google.maps.event.clearListeners(autocomplete, "place_changed");
    };
  }, []);

  return (
    <div className={`form-floating ${className}`}  style={{ maxWidth: "100%" }}>
      <input
        ref={autocompleteInputRef}
        type="text"
        className="form-control text-container"
        id="autocomplete-input"
        placeholder=""
        style={{ maxWidth: "100%" }}
      />
      <label htmlFor="autocomplete-input" className="text-container">
        Busca los gimnasios de nuestros entrenadores más cercanos
      </label>
    </div>
  );
}


export default AutocompleteInput;
