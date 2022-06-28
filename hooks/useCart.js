import { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
export const cartContext = createContext();

export const cartContextProvider = (props) => {
  const [frames, setFrames] = useState([]);
  const addFrame = ({ title, divider, tagline, zoom, position, frameSize, frameType, frameColor, style, price] }) => {
    const id = uuidv1();
    const newFrame = {
      id: id,
      title: title,
      divider: divider,
      tagline: tagline,
      zoom: zoom,
      position: position,
      frameSize: frameSize,
      frameType: frameType,
      frameColor: frameColor,
      style: style,
      price: price
    };
    setFrames([...frames, newFrame]);
  };
  const removeFrame = (id) => {
    setFrames(frames.filter(frame => frame.id !== id));
  };
  return (
    <cartContext.Provider
      value={{
        frames,
        addFrame,
        removeFrame,
      }}>
      {props.children}
    </cartContext.Provider>
  );
};
