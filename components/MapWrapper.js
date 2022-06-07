import { useState, useEffect, useRer, useCallback } from "react";
import MapProperties from "./MapProperties";
import Map from "./Map";
import Frame from "./Frame";

const MapWrapper = (props) => {
  const [position, setPosition] = useState([18.95417755470588, 72.8551981450371]);
  const [zoom, setZoom] = useState(11.5);
  const [title, setTitle] = useState("Mumbai");
  const [divider, setDivider] = useState("INDIA");
  const [tagline, setTagline] = useState("19.075°N / 72.877°E");
  const [mapData, setMapData] = useState({
    position: "dfdf",
    zoom: 11.5,
    title: "Mumbai",
    divider:"INDIA",
    tagline: "19.075°N / 72.877°E"
  });
  const updateTagline = (place) => {
    const newTagLine =
      place.geometry.location.lat().toString().substring(0, 6) +
      "°N / " +
      place.geometry.location.lng().toString().substring(0, 6);
    setTagline(newTagLine);
  };
  const onPlaceChange = (place) => {
    setTitle(place.name);
    console.log("changin place", place);
    setPosition([place.geometry.location.lat(), place.geometry.location.lng()]);
    // updateTagline(place);
  };

  const onTitleChange = (newTitle) => {
    setTitle(newTitle);
  };
  const onDividerChange = (newDivider) => {
    setDivider(newDivider);
  };
  const onTagLineChange = (newTagLine) => {
    setTagline(newTagLine);
  };
  const handleZoomStart = () => {
    console.log("mewo mowe");
  };
  const onCenterChange = useCallback(
    (newCenter) => {
      console.log("usecallback", newCenter);
      setPosition([newCenter.lat, newCenter.lng]);
      //  setGeoLocation(newCenter);
    },
    [position]
  );

  return (
    <section>
      <div className='flex flex-col lg:flex-row'>
        <div
          id='frame-container'
          className='lg:w-7/12 py-14 flex items-center justify-center'
          style={{ backgroundColor: "#E5E5E5" }}>
          <Frame title={title} divider={divider} tagline={tagline}>
            <div style={{ zoom: 0.67, overflow: "hidden" }}>
              <Map
                onCenterChange={onCenterChange}
                position={position}
                zoom={zoom}
                //handleZoomStart={handleZoomStart}
              />
            </div>
          </Frame>
        </div>

        <div className='w-full lg:w-5/12'>
          <MapProperties
            position={position}
            title={title}
            divider={divider}
            tagline={tagline}
            onPlaceChange={onPlaceChange}
            onTitleChange={onTitleChange}
            onDividerChange={onDividerChange}
            onTagLineChange={onTagLineChange}></MapProperties>
        </div>
        <div id='pane-ref'></div>
      </div>
    </section>
  );
};

export default MapWrapper;
