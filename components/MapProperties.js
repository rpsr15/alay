import React, { useState } from "react";
import { Button, Text, Input } from "@nextui-org/react";
import { IoTextOutline, IoCartOutline, IoImageOutline, IoLocationOutline, IoCloseOutline } from "react-icons/io5";
import Autocomplete from "react-google-autocomplete";
import { useContext } from "react";
import { mapDataContext } from "../hooks/useMapData";
import GroupSelection from "./GroupSelection";

//  TOOD: Move to utils
const getTagline = (lat, lng) => {
  const newTagLine = lat.substr(0, 6) + "°N / " + lng.substr(0, 6) + "°E";
  return newTagLine;
};

//  TODO: Move Constants to separate file
const frameSizes = [
  {
    title: "Small 30x40cm",
    value: "small",
  },
  {
    title: "Medium 50x70cm",
    value: "medium",
  },
  {
    title: "Large 70x100cm",
    value: "large",
  },
];
const frameTypes = [
  {
    title: "Hanger",
    value: "hanger",
  },
  {
    title: "Frame",
    value: "frame",
  },
];
const hangerColors = [
  {
    title: "Natural",
    value: "natural",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-94jl2uNv/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2019/10/Wooden-poster-hanger.jpg",
  },
  {
    title: "Black",
    value: "black",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-225EaN1V/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2019/10/Black-Poster-Hanger.jpg",
  },
  {
    title: "White",
    value: "white",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-h5L2U0Gt/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2019/10/White-Poster-Hanger.jpg",
  },
];
const fullFrameColors = [
  {
    title: "Natural",
    value: "natural",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-KAsPd5nZ/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2019/10/Natural-Wood-Frame-Front-view-in-size-24x36-inches.jpg",
  },
  {
    title: "Black",
    value: "black",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-C_-cHLaM/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches.jpg",
  },
  {
    title: "White",
    value: "white",
    url: "https://mldtl9cr1v1x.i.optimole.com/UtPelFM-ajINUZYo/w:100/h:100/q:mauto/rt:fill/g:ce/f:avif/https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches.jpg",
  },
];
const frameColors = [
  {
    title: "Natural",
    value: "natural",
  },
  {
    title: "Black",
    value: "black",
  },
  {
    title: "White",
    value: "white",
  },
];
const MapProperties = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const mapData = useContext(mapDataContext);
  const onPlaceSelect = (place) => {
    const fullName = place.formatted_address;
    const cityName = fullName.substr(0, fullName.indexOf(","));

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const newTagline = getTagline(lat + "", lng + "");
    mapData.setTitle(cityName);
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
    mapData.setTagline(e.target.value);
  };
  const setFrameSize = (value) => {
    mapData.setFrameSize(value);
  };
  const handleFrameSizeChange = (newSize) => {
    mapData.setFrameSize(newSize);
  };
  const handleFrameTypeChange = (newType) => {
    mapData.setFrameType(newType);
  };
  const handleFrameColorChange = (newColor) => {
    mapData.setFrameColor(newColor);
  };
  const handleAddtoCart = () => {
    console.log("handle it");

    const mapDetails = (({ title, divider, tagline, zoom, position, frameColor, frameSize, frameType }) => ({
      title,
      divider,
      tagline,
      zoom,
      position,
      frameColor,
      frameSize,
      frameType,
    }))(mapData);
    mapData.setShouldTakeSnapshot(true);
  };
  const PropertyEditor = () => {
    switch (selectedTab) {
      case 1:
        return (
          <div>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Text className='text-white text-center text-lg'>Find your favorite place</Text>
              <Autocomplete
                className='h-10 rounded-xl pl-2 placeholder-black'
                apiKey={process.env.NEXT_PUBLIC_PLACESAPIKEY}
                onPlaceSelected={(place) => {
                  console.log("Place selected", place)
                  onPlaceSelect(place);
                }}
                options={{
                  types: ["(cities)"],
                  componentRestrictions: { country: "in" },
                }}
              />
            </div>
            <div className='flex justify-center'>
              <Button className='bg-oyster-bay text-black' onClick={(event) => handleTabChange(event, 2)}>
                Next Step
              </Button>
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Text className='text-white text-center text-lg'>Choose your style</Text>
            </div>
            <div className='flex justify-center'>
              <Button className='bg-oyster-bay text-black' onClick={(event) => handleTabChange(event, 3)}>
                Next Step
              </Button>
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Text className='text-white text-lg' style={{ textAlign: "center" }}>
                {" "}
                Customize the headers
              </Text>
              <Input type={"text"} value={mapData.title} onChange={handleTitleChange} />
              <Input label='Divider' value={mapData.divider} onChange={handleDividerChange} />
              <Input label='Tagline' value={mapData.tagline} onChange={handleTagLineChange} />
            </div>
            <div className='flex justify-center'>
              <Button className='bg-oyster-bay text-black' onClick={(event) => handleTabChange(event, 4)}>
                Next step
              </Button>
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Text className='text-white text-lg' style={{ textAlign: "center" }}>
                Finish
              </Text>
              <div>
                <Text>Select poster size</Text>
                <div className='w-full'>
                  <GroupSelection
                    options={frameSizes}
                    direction='col'
                    value={mapData.frameSize}
                    onSelect={handleFrameSizeChange}
                  />
                </div>
              </div>
              <div>
                <Text>Select frame type</Text>
                <div className='w-full'>
                  <GroupSelection
                    options={frameTypes}
                    direction='row'
                    value={mapData.frameType}
                    onSelect={handleFrameTypeChange}
                  />
                </div>
              </div>
              <div>
                <Text>Select frame color</Text>
                <div className='w-full'>
                  <GroupSelection
                    options={mapData.frameType === "hanger" ? hangerColors : fullFrameColors}
                    direction='row'
                    value={mapData.frameColor}
                    onSelect={handleFrameColorChange}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <Button className='bg-oyster-bay text-black' onPress={handleAddtoCart}>
                Add to cart
              </Button>
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
  };
  const handleTabChange = (event, tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='fixed bottom-0 w-full z-[2000] lg:static bg-secondary lg:h-full lg:flex lg:flex-row lg:justify-between'>
      <div className='flex flex-col lg:w-full'>
        <div className='lg:hidden'>
          <div className='float-right'>
            {selectedTab !== 0 ? (
              <IoCloseOutline className='bg-secondary' onClick={(event) => handleTabChange(event, 0)} />
            ) : null}
          </div>
        </div>
        <div className='property-content bg-secondary'>
          <div>{PropertyEditor()}</div>
        </div>
      </div>
      <div className='w-full bg-secondary flex flex-row items-center lg:flex-col lg:basis-1/4 '>
        <div
          className={`w-full items-center justify-center text-center pt-3 pb-2 ${
            selectedTab === 1 ? "bg-secondary-dark" : ""
          }`}
          onClick={(event) => handleTabChange(event, 1)}>
          <div className='flex items-center justify-center text-xl'>
            <IoLocationOutline />
          </div>
          <Text>Location</Text>
        </div>
        <div
          className={`w-full items-center justify-center text-center pt-3 pb-2 ${
            selectedTab === 2 ? "bg-secondary-dark" : ""
          }`}
          onClick={(event) => handleTabChange(event, 2)}>
          <div className='flex items-center justify-center text-xl'>
            <IoImageOutline />
          </div>
          <Text>Style</Text>
        </div>
        <div
          className={`w-full items-center justify-center text-center pt-3 pb-2 ${
            selectedTab === 3 ? "bg-secondary-dark" : ""
          }`}
          onClick={(event) => handleTabChange(event, 3)}>
          <div className='flex items-center justify-center'>
            <IoTextOutline />
          </div>

          <Text>Text</Text>
        </div>
        <div
          className={`w-full items-center justify-center text-center pt-3 pb-2 ${
            selectedTab === 4 ? "bg-secondary-dark" : ""
          }`}
          onClick={(event) => handleTabChange(event, 4)}>
          <div className='flex items-center justify-center text-xl'>
            <IoCartOutline />
          </div>
          <Text>Finish</Text>
        </div>
      </div>
    </div>
  );
};

export default MapProperties;
