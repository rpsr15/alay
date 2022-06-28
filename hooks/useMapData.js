import { createContext, useState, useEffect } from "react";
export const mapDataContext = createContext();
export const MapDataContextProvider = (props) => {
  const [title, setTitle] = useState("Mumbai");
  const [divider, setDivider] = useState("INDIA");
  const [tagline, setTagline] = useState("19.075°N / 72.877°E");
  const [zoom, setZoom] = useState(11.5);
  const [position, setPosition] = useState([18.95417755470588, 72.8551981450371]);
  // small , medium and large
  const [frameSize, setFrameSize] = useState("small");
  // hanger and full frames
  const [frameType, setFrameType] = useState("hanger");
  // white, black and natural
  const [frameColor, setFrameColor] = useState("natural");
  return (
    <mapDataContext.Provider
      value={{
        title,
        divider,
        tagline,
        zoom,
        position,
        frameSize,
        frameType,
        frameColor,
        setTitle,
        setDivider,
        setTagline,
        setZoom,
        setPosition,
        setFrameSize,
        setFrameType,
        setFrameColor,
      }}>
      {props.children}
    </mapDataContext.Provider>
  );
};
