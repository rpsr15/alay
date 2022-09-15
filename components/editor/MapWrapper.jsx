import Map from "./Map";
import Frame from "./Frame";
import { useState, memo } from "react";
import { Button, Text, Input, Spacer } from "@nextui-org/react";
import { useContext } from "react";
import { IoTextOutline, IoCartOutline, IoImageOutline, IoLocationOutline, IoCloseOutline } from "react-icons/io5";
import { mapDataContext } from "../../hooks/useMapData";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
const getTagline = (lat, lng) => {
  console.log("gettagline", lat, lng);
  const newTagLine = lat.substr(0, 6) + "°N / " + lng.substr(0, 6) + "°E";
  return newTagLine;
};
const MapWrapper = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const mapData = useContext(mapDataContext);
  const onPlaceSelect = (place) => {
    const fullName = place.formatted_address;
    const cityName = fullName.substr(0, fullName.indexOf(","));
    console.log(cityName);
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
    props.onTagLineChange(e.target.value);
  };
  const setFrameSize = (value) => {
    mapData.setFrameSize(value);
  };
  const handleFrameSizeChange = (newSize) => { mapData.setFrameSize(newSize) }
  const handleFrameTypeChange = (newType) => { mapData.setFrameType(newType) }
  const handleFrameColorChange = (newColor) => { mapData.setFrameColor(newColor) }
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
      title:'Hanger',
      value:'hanger'
    },
    {
      title:'Frame',
      value:'frame'
    }
  ]
  const frameColors = [
    {
      title:'Natural',
      value:'natural'
    },
    {
      title:'Black',
      value:'black'
    },
    {
      title:'White',
      value:'white'
    }
  ]
  
  const PropertyEditor = () => {
    switch (selectedTab) {
      case 1:
        return (
          <div>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Text className='text-white text-center text-lg'>Find your favorite place</Text>
              <Autocomplete
                className='h-10 rounded-xl pl-2 placeholder-black'
                onPlaceSelected={(place) => {
                  console.log(place.formatted_address);
                  console.log(place.geometry.location.lat());
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
              <Input label='Headline' value={mapData.title} onChange={handleTitleChange} />
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
                  <GroupSelection options={frameSizes} direction='col' value={mapData.frameSize} onSelect={handleFrameSizeChange} />
                </div>
              </div>
              <div>
                <Text>Select frame type</Text>
                <div className='w-full'>
                  <GroupSelection options={frameTypes} direction='row' value={mapData.frameType} onSelect={handleFrameTypeChange} />
                </div>
              </div>
              <div>
                <Text>Select frame color</Text>
                <div className='w-full'>
                  <GroupSelection options={frameColors} direction='row' value={mapData.frameColor} onSelect={handleFrameColorChange} />
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <Button className='bg-oyster-bay text-black'>Add to cart</Button>
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
    <section>
      <div id='frame-container' className='' style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
        <div className='pt-[10vh] px-10'>
          <Frame>
            <div style={{ zoom: 0.67, overflow: "hidden" }}>
              <Map />
            </div>
          </Frame>
        </div>
        <div className='fixed bottom-0 w-full z-[2000]'>
          <div className='flex flex-col'>
            <div>
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
          <div className='w-full bg-secondary flex flex-row items-center'>
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
      </div>
    </section>
  );
};
const GroupSelection = ({ options, onSelect, direction, value }) => {
  const spaceValue = (direction === 'row') ? 'space-x-1' : 'space-y-1'
  console.log("test",value)
  return (
    <div className={`flex flex-${direction} w-full  ${spaceValue}`}>
      {options.map((item) => {
        console.log("selected current", value);
        const selectedClass = "bg-secondary-dark text-white underline";
        return (
          <div
            className={`grow basis-0 text-center bg-white rounded-xl leading-10  cursor-pointer hover:underline ${
              value === item.value ? selectedClass : ""
            }`}
            onClick={() => { onSelect(item.value)} }
            >
            {" "}
            {item.title}{" "}
          </div>
        );
      })}
    </div>
  );
};
GroupSelection.defaultProps = {
  direction: "row",
};

export default MapWrapper;
