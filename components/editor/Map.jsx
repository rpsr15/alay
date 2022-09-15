 import React, { useEffect, useState, memo, useContext } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, useMapEvent } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { mapDataContext } from "../../hooks/useMapData";
const styles = {
  modern: {
    url: "https://api.mapbox.com/styles/v1/ravirathore15/ckp8gw7yk052917pkug0835rd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmF2aXJhdGhvcmUxNSIsImEiOiJja29wdGs0NDQwbW1wMm5zejI3bXR3Z2Y3In0.7KwUAoANdedvKM9WpldNTg",
  },
};
const StyledMapContainer = styled(MapContainer)`
 
  height: calc(1.4 * 110vw);

  @media (min-width: 500px) {
   
    height: calc(1.4 * 65vw);
  }
`;

// Todo move style urls to .env file
const Map = ({ style, setMapRef }) => {
  const mapData = useContext(mapDataContext);
  const [map, setMap] = useState(null);
  function MapEvents() {
    const map = useMap();
    const currentMap = useMapEvents({
      zoomend: () => {
        mapData.setZoom(map.getZoom());
      },
      moveend: () => {
        mapData.setPosition([map.getCenter().lat, map.getCenter().lng]);
      },
    });

    return null;
  }
  useEffect(() => {
    if (map !== null && mapData.position[0] !== map.getCenter().lat) {
      map.panTo(mapData.position);
    }
  }, [mapData.position]);

  return (
    <div>
      <StyledMapContainer
        ref={setMap}
        minZoom={10}
        maxZoom={15}
        zoomSnap={0.25}
        zoomDelta={0.25}
        center={mapData.position}
        zoom={mapData.zoom}
        scrollWheelZoom={false}>
        <TileLayer detectRetina={true} url={styles[style].url} />
        <MapEvents />
      </StyledMapContainer>
    </div>
  );
};

Map.defaultProps = {
  style: "modern",
};

export default memo(Map);
