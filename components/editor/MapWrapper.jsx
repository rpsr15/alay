import Map from "./Map";
import Frame from "./Frame";

import MapProperties from "../MapProperties";

const MapWrapper = (props) => {
  return (
    <section style={{ backgroundColor: "#E5E5E5" }} className="h-screen">
      <div className="flex flex-col lg:flex-row h-[90vh] ">
        <div className="frame-wrapper  lg:basis-[70%]  h-full pt-14 lg:items-center">
          <div className="lg:flex   lg:items-center">
            <Frame>
              <div className="map-container" style={{ overflow: "hidden" }}>
                <Map />
              </div>
            </Frame>
          </div>
        </div>
        <div className="  basis-auto flex-grow">
          <MapProperties />
        </div>
      </div>
    </section>
  );
};

export default MapWrapper;
