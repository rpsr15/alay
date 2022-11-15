import { useEffect } from "react";
import { Input } from '@nextui-org/react';




const InputSearch = ({ placeholder, icon, centre, onPlaceSelect, value }) => {
  const defaultBounds = {
    north: centre.lat + 0.1,
    south: centre.lat - 0.1,
    east: centre.lng + 0.1,
    west: centre.lng - 0.1,
  };
  const options = {
    bounds: defaultBounds,
    componentRestrictions: { country: "in" },
    fields: ["name", "geometry"],
    strictBounds: false,
    types: ["(cities)"],
  };

  useEffect(() => {
    // Create a bounding box with sides ~10km away from the center point
    const input = document.getElementById("pac-input");
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, "place_changed", function () {
      let place = autocomplete.getPlace();
  
    });
  }, []);

  const ResultList = () => { 
    return <div></div>
   }
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <Input  icon={icon} id='pac-input'  label={placeholder} initialValue={value} />
        <ResultList/>
      </div>
    </div>
  );
};
InputSearch.defaultProps = {
  icon: "",
  placeholder: "",
};
export default InputSearch;
