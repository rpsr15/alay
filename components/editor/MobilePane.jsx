
import { useState, memo } from "react";
import ButtonRadio from "./ButtonRadio";
import InputSearch from "./InputSearch";
import ConditionalGroup from "./ConditionalGroup";
import HangerTypeCard from "./HangerTypeCard";
import styles from "./MapProperties.module.css";
import { mapDataContext } from "../../hooks/useMapData";
const FrameCatergoryCard = ({ title, value, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(value)}
      className={`${
        isSelected === true ? "bg-oyster-bay" : ""
      } content-title w-full text-center inline-block text-sm text-black px-1 py-2`}>
      {title}
    </div>
  );
};

const MobilePane = ({
  position,
  setFrameSize,
  frameSize,
  title,
  divider,
  tagline,
  handleTitleChange,
  handleDividerChange,
  handleTagLineChange,
  onPlaceSelect,
  frameType,
  frameColor,
  setFrameType,
  setFrameColor,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleFrameSizeCheckboxChange = (frameSize) => {
    setFrameSize(frameSize);
  };
  const handleFrameTypeChange = (value) => {
    setFrameType(value);
  };
  const handleFrameColorChange = (value) => {
    setFrameColor(value);
  };
  const frameTypes = [
    {
      render: function (isActive) {
        return (
          <FrameCatergoryCard
            onClick={handleFrameTypeChange}
            value='full frames'
            isSelected={isActive}
            title={"Full Frames"}
          />
        );
      },
    },
    {
      render: function (isActive) {
        return (
          <FrameCatergoryCard onClick={handleFrameTypeChange} value='hangers' isSelected={isActive} title={"Hangers"} />
        );
      },
    },
  ];
  const hangerColors = [
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='black'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"Black"}
            imageSource='https://www.mapiful.com/content/uploads/2019/10/Black-Poster-Hanger-100x100.jpg'
          />
        );
      },
    },
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='natural'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"Natural"}
            imageSource='https://www.mapiful.com/content/uploads/2019/10/Wooden-poster-hanger-100x100.jpg'
          />
        );
      },
    },
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='white'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"White"}
            imageSource='https://www.mapiful.com/content/uploads/2019/10/White-Poster-Hanger-100x100.jpg'
          />
        );
      },
    },
  ];
  const FullFrameColors = [
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='black'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"Black"}
            imageSource='https://www.mapiful.com/content/uploads/2019/10/Black-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg'
          />
        );
      },
    },
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='natural'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"Natural"}
            imageSource='https://www.mapiful.com/content/uploads/2019/10/Natural-Wood-Frame-Front-view-in-size-24x36-inches-100x100.jpg'
          />
        );
      },
    },
    {
      render: function (isActive) {
        return (
          <HangerTypeCard
            value='white'
            onClick={handleFrameColorChange}
            isSelected={isActive}
            label={"White"}
            imageSource='https://www.mapiful.com/content/uploads/2021/12/White-Wood-Frame-Front-view-in-size-18x24-inches-100x100.jpg'
          />
        );
      },
    },
  ];
  const panes = [
    {
      menuItem: "Location",
      render: () => (
        <div>
          <div>
            <InputSearch
              onPlaceSelect={onPlaceSelect}
              centre={position}
              className='w-full'
              action={{
                icon: "search",
              }}
              placeholder='Enter place'
              type='text'
            />
          </div>
        </div>
      ),
    },
    { menuItem: "Style", render: () => <div>Tab 2 Content</div> },
    {
      menuItem: "Text",
      render: () => (
        <div>
          <div>
            {" "}
            <div className='flex justify-between pb-2.5'>
              <InputLabel>Title</InputLabel>
              <Input type='text' value={title} onChange={handleTitleChange} />
            </div>
            <div className='flex justify-between pb-2.5'>
              <InputLabel>Divider</InputLabel>
              <Input type='text' value={divider} onChange={handleDividerChange} />
            </div>
            <div className='flex justify-between pb-2.5'>
              <InputLabel>Tagline</InputLabel>
              <Input type='text' value={tagline} onChange={handleTagLineChange} />
            </div>
          </div>
        </div>
      ),
    },
    {
      menuItem: "Size",
      render: () => (
        <div>
          <div>
            <ButtonRadio
              value={"small"}
              checked={frameSize === "small" ? true : false}
              label={"Small 11x17cm"}
              price={"$1000"}
              onChange={handleFrameSizeCheckboxChange}
            />
            <ButtonRadio
              value={"medium"}
              checked={frameSize === "medium" ? true : false}
              label={"Medium 18x24cm"}
              price={"$1000"}
              onChange={handleFrameSizeCheckboxChange}
            />
            <ButtonRadio
              value={"large"}
              checked={frameSize === "large" ? true : false}
              label={"Large 24x36cm"}
              price={"$1000"}
              onChange={handleFrameSizeCheckboxChange}
            />
          </div>
        </div>
      ),
    },
    {
      menuItem: "Frame",
      render: () => (
        <div>
          <div>
            <div className='w-full'>
              <div className='border border-slate-300'>
                <ConditionalGroup contents={frameTypes} activeIndex={frameType === "full frames" ? 0 : 1} />
              </div>
              <div className='mt-5'>
                <ConditionalGroup
                  contents={frameType === "full frames" ? FullFrameColors : hangerColors}
                  activeIndex={frameColor === "black" ? 0 : frameColor === "natural" ? 1 : 2}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const handleFrametype = (value) => {
    console.log(value);
  };
  const onClick = (e, { activeIndex }) => {
    setActiveIndex(activeIndex);
    // TODO: click will get properties on viewport.
    // scroll into view is working on 2nd click not on first click
  };

  // return <div className='mobile-map-properties' activeIndex={activeIndex} panes={panes} onTabChange={onClick} />;
  return <div>mobiel pane</div>
};

export default memo(MobilePane);
