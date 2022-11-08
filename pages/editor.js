import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../components/editor/MapWrapper"), {
  ssr: false,
});

export default function editorPage(props) {
  const handleFrameChange = (data) => {
    console.log(data);
    setValue(data);
  };

  return (
    <div className=''>
      {/* <MapWrapper mapSize="large" /> */}
      <MapWithNoSSR />
    </div>
  );
}
