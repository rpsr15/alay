import { useContext, memo } from "react";
import React from "react";
import MobilePane from "./MobilePane";
import { mapDataContext } from "../../hooks/useMapData";

const getTagline = (lat, lng) => {
  console.log("gettagline", lat, lng);
  const newTagLine = lat.substr(0, 6) + "°N / " + lng.substr(0, 6) + "°E";
  return newTagLine;
};

const MapProperties = (props) => {
  const mapData = useContext(mapDataContext);

  const onPlaceSelect = (place) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const newTagline = getTagline(lat + "", lng + "");
    mapData.setTitle(place.name);
    mapData.setPosition([lat, lng]);
    mapData.setTagline(newTagline);
  };
  const handleTitleChange = (e) => {
    mapData.setTitle(e.target.value);
  };
  const handleDividerChange = (e) => {
    mapData.setDivider(e.target.value);
  };
  const handleTagLineChange = (e) => {
    //todo: generatetagline and  update
    props.onTagLineChange(e.target.value);
  };
  const setFrameSize = (value) => {
    mapData.setFrameSize(value);
  };

  return (
    <div>
      {/* <DesktopPane
        handleTitleChange={handleTitleChange}
        handleDividerChange={handleDividerChange}
        handleTagLineChange={handleTagLineChange}
        title={props.title}
        divider={props.divider}
        tagline={props.tagline}
      /> */}
      <MobilePane
        onPlaceSelect={onPlaceSelect}
        handleTitleChange={handleTitleChange}
        handleDividerChange={handleDividerChange}
        handleTagLineChange={handleTagLineChange}
        frameSize={mapData.frameSize}
        title={mapData.title}
        divider={mapData.divider}
        tagline={mapData.tagline}
        position={mapData.position}
        setFrameSize={setFrameSize}
        setFrameType={mapData.setFrameType}
        setFrameColor={mapData.setFrameColor}
        frameType={mapData.frameType}
        frameColor={mapData.frameColor}
      />
    </div>
  );
};

// const DesktopPane = ({
//   title,
//   divider,
//   tagline,
//   handleTitleChange,
//   handleDividerChange,
//   handleTagLineChange,
//   frameSize,
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const handleClick = (e, titleProps) => {
//     console.log(titleProps);
//     const { index } = titleProps;
//     const newIndex = activeIndex === index ? -1 : index;
//     setActiveIndex(newIndex);
//   };
//   return (
//     <Accordion fluid styled>
//       {/* Text */}
//       <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
//         <Icon name='dropdown' />
//         Text
//       </Accordion.Title>
//       <Accordion.Content active={activeIndex === 2}>
//         <div className='flex justify-between pb-2.5'>
//           <InputLabel>Title</InputLabel>
//           <Input type='text' value={title} onChange={handleTitleChange} />
//         </div>

//         <div className='flex justify-between pb-2.5'>
//           <InputLabel>Divider</InputLabel>
//           <Input type='text' value={divider} onChange={handleDividerChange} />
//         </div>

//         <div className='flex justify-between pb-2.5'>
//           <InputLabel>Tagline</InputLabel>
//           <Input type='text' value={tagline} onChange={handleTagLineChange} />
//         </div>
//       </Accordion.Content>
//     </Accordion>
//   );
// };

export default memo(MapProperties);
