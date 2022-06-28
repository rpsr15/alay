
//import MapWrapper from "../components/MapWrapper";
import { useState } from "react";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/editor/MapWrapper"), {
  ssr: false
});

export default function editorPage(props) {
  const handleFrameChange = (data) => {
    console.log(data)
    setValue(data)
  }

  return (
    <div >

      {/* <MapWrapper mapSize="large" /> */}
      <MapWithNoSSR />
    </div >
  );
}

