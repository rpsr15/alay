import { Tab } from "semantic-ui-react";
import { useState, memo } from "react";
import ButtonRadio from "./ButtonRadio";
import InputSearch from "./InputSearch";
import ConditionalGroup from "./ConditionalGroup";

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
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleFrameSizeCheckboxChange = (frameSize) => {
    setFrameSize(frameSize);
  };
  const frameTypes = [
    {
      render: () => (
        <div className='content-title w-full text-center inline-block text-sm text-black px-1.5 py-3'>Full Frames</div>
      ),
    },
    {
      render: () => (
        <div className='content-title w-full text-center inline-block text-sm text-black px-1.5 py-3'>Hangers</div>
      ),
    },
  ];
  const hangerColors= [
      {

      }
  ]
  const panes = [
    {
      menuItem: "Location",
      render: () => (
        <Tab.Pane>
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
        </Tab.Pane>
      ),
    },
    { menuItem: "Style", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    {
      menuItem: "Text",
      render: () => (
        <div>
          <Tab.Pane>
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
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: "Size",
      render: () => (
        <Tab.Pane>
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
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Frame",
      render: () => (
        <Tab.Pane>
          <div>
            <div className='w-full'>
              <div className='border border-slate-300'>
                <ConditionalGroup contents={frameTypes} activeClass={"frameTypeActive"} onChange={handleFrameType} />
              </div>
              <ConditionalGroup contents={hangerColors} activeClass={"frameTypeActive"} onChange={handleFrameType} />
            </div>
          </div>
        </Tab.Pane>
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
  const handleFrameType = (activeIndex) => {
    console.log(activeIndex);
  };
  return <Tab activeIndex={activeIndex} panes={panes} onTabChange={onClick} />;
};

export default memo(MobilePane);
