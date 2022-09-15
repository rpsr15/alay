
//import MapWrapper from "../components/MapWrapper";
import { useState } from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/editor/MapWrapper"), {
  ssr: false
});

export default function editorPage(props) {
  useEffect(() => {
    
    if(window.innerWidth < 768)
    {
      console.log("meow")
      document.body.classList.add('noscroll');
    }
    
  }, [])
  
  const handleFrameChange = (data) => {
    console.log(data)
    setValue(data)
  }

  return (
    <div className="" >

      {/* <MapWrapper mapSize="large" /> */}
      <MapWithNoSSR />
    </div >
  );
}

