import { useState, useEffect, useRer, useCallback } from "react";
import MapProperties from "./MapProperties";
import Map from "./Map";
import Frame from "./Frame";

const MapWrapper = (props) => {
  const [mapData, setMapData] = useState({
    position: [18.95417755470588, 72.8551981450371],
    zoom: 11.5,
    title: "Mumbai",
    divider: "INDIA",
    tagline: "19.075°N / 72.877°E",
    frameSize: "small",
  });
  const getTagline = (lat, lng) => {
    console.log('gettagline', lat, lng)
    const newTagLine = lat.substr(0, 6) + "°N / " + lng.substr(0, 6) + "°E";
    return newTagLine;
  };

  const onPlaceChange = useCallback((place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const newTagline = getTagline(lat + "", lng + "");
    setMapData({
      ...mapData,
      title: place.name,
      position: [lat, lng],
      tagline: newTagline,
    });
  }, []);
  const onTitleChange = useCallback(
    (newTitle) => {
      setMapData({ ...mapData, title: newTitle });
    },
    [mapData.title]
  );

  const onDividerChange = useCallback(
    (newDivider) => {
      setMapData({ ...mapData, divider: newDivider });
    },
    [mapData.tagline]
  );
  const onTagLineChange = useCallback(
    (tagline) => {
      setMapData({ ...mapData, tagline: newTagLine });
    },
    [mapData.tagline]
  );
  const handleMapPropertiesChange = useCallback(
    (newPosition, newZoom) => {
      console.log("handle  map  propertie chnage", newPosition[0]);
      
      setMapData({ ...mapData, position: newPosition, zoom: newZoom, tagline: getTagline(newPosition[0]+"", newPosition[1]+"") });
    },
    [mapData.position]
  );

  const onFrameSizeChange = useCallback(
    (newFrameSize) => {
      setMapData({ ...mapData, frameSize: newFrameSize });
    },
    [mapData.frameSize]
  );

  return (
    <section>
      <div className='flex flex-col lg:flex-row'>
        <div
          id='frame-container'
          className='lg:w-7/12 py-14 flex items-center justify-center'
          style={{ backgroundColor: "#E5E5E5" }}>
          <Frame title={mapData.title} divider={mapData.divider} tagline={mapData.tagline}>
          <div style={{ zoom: 0.67, overflow: "hidden" }}>
            <Map position={mapData.position} zoom={mapData.zoom} onMapPropertiesChange={handleMapPropertiesChange} />
          </div>
          </Frame>
        </div>

        <div className='w-full lg:w-5/12'>
          <MapProperties
            position={mapData.Dataposition}
            title={mapData.title}
            divider={mapData.divider}
            tagline={mapData.tagline}
            frameSize={mapData.frameSize}
            onFrameSizeChange={onFrameSizeChange}
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
