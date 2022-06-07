import React, { useEffect,useState  } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, useMapEvent } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
const styles = {
  modern: {
    url: "https://api.mapbox.com/styles/v1/ravirathore15/ckp8gw7yk052917pkug0835rd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmF2aXJhdGhvcmUxNSIsImEiOiJja29wdGs0NDQwbW1wMm5zejI3bXR3Z2Y3In0.7KwUAoANdedvKM9WpldNTg",
  },
};
const StyledMapContainer = styled(MapContainer)`
  width: 110vw;
  height: calc(1.4 * 110vw);

  @media (min-width: 500px) {
    width: 65vw;
    height: calc(1.4 * 65vw);
  }
`;



// Todo move style urls to .env file
const Map = ({ onCenterChange, position, zoom, style }) => {

  function MyComponent({ onCenterChange, mapCentre }) {
    const map = useMapEvents({
      moveend: () => {
        console.log("insdie mycomponent", map.getCenter());
        onCenterChange(map.getCenter());
      },
    });
    return null;
  }
  function UpdateMapCentre({ mapCentre }) {

   const map = useMap();
   console.log('inside update map centre')
   // map.panTo(mapCentre);
    return null;
  }

  useEffect(() => {
    console.log("map rerender", position);
  }, [position]);

  return (
    <StyledMapContainer
      minZoom={11}
      maxZoom={15}
      zoomSnap={0.25}
      zoomDelta={0.25}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}>
      <TileLayer detectRetina={true} url={styles[style].url} />
      <MyComponent onCenterChange={onCenterChange} />
      {/* <UpdateMapCentre mapCentre={position} /> */}
    </StyledMapContainer>
  );
};

Map.defaultProps = {
  style: "modern",
};

export default Map;
