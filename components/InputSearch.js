import { useEffect } from "react";
import { Accordion, Icon, Input, Button, Form, List } from "semantic-ui-react";
import styled, { css } from "styled-components";

const StyledInput = styled(Input)`
  width: 100%;
  & input {
    border-radius: 0 !important;
    font-family: "Playfair Display", serif !important;
  }
  font-family: "Playfair Display", serif !important;
`;

const StyledList = styled(List)`
  border-right: 1px solid #2f2e2e !important;
  border-left: 1px solid #2f2e2e !important;
  border-bottom: 1px solid #2f2e2e !important;
  margin-top: 2px !important;
  background-color: #f9f9f9;
  max-width: 100% !important;
  width: 214px !important;
`;

const InputSearch = ({ placeholder, icon, centre, onPlaceSelect }) => {
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
      onPlaceSelect(place);
    });
  }, []);

  return (
    <div>
      <div>
        <StyledInput icon={icon} id='pac-input' className='pac-input' placeholder={placeholder} />
      </div>
    </div>
  );
};
InputSearch.defaultProps = {
  icon: "",
  placeholder: "",
};
export default InputSearch;
