import { useState, useEffect, useRef, memo } from "react";
import { Accordion, Icon, Input, Button, Form, List, Label, Checkbox, Tab } from "semantic-ui-react";
import ButtonRadio from "./ButtonRadio";
import InputSearch from "./InputSearch";
import React from "react";
import InputLabel from "./InputLabel";




const MapProperties = (props) => {
  const [tagline, setTagline] = useState(tagline);
  const onPlaceSelect = (newPlace) => {
    props.onPlaceChange(newPlace);
  };
  const handleTitleChange = (e) => {
    //setTitle(e.target.value)
     props.onTitleChange(e.target.value);
  };
  const handleDividerChange = (e) => {
    props.onDividerChange(e.target.value);
  };
  const handleTagLineChange = (e) => {
    props.onTagLineChange(e.target.value);
  };
  const setFrameSize = (value) => { 
    props.onFrameSizeChange(value)
  }
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
      <MemoizedMobilepane
        onPlaceSelect={onPlaceSelect}
        handleTitleChange={handleTitleChange}
        handleDividerChange={handleDividerChange}
        handleTagLineChange={handleTagLineChange}
        frameSize={props.frameSize}
        title={props.title}
        divider={props.divider}
        tagline={props.tagline}
        setFrameSize={setFrameSize}
      />
    </div>
  );
}
const MobilePane = ({ setFrameSize, frameSize, title, divider, tagline, handleTitleChange, handleDividerChange, handleTagLineChange, onPlaceSelect}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleFrameSizeCheckboxChange = (frameSize) => {
    //console.log(frameSize);
    setFrameSize(frameSize)
  };
  const panes = [
    {
      menuItem: "Location",
      render: () => (
        <Tab.Pane>
          <div>
            <InputSearch
              onPlaceSelect={onPlaceSelect}
              centre={Geolocation}
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
  ];
  const onClick = (e, { activeIndex }) => {
    setActiveIndex(activeIndex)
    // TODO: click will get properties on viewport.
    // scroll into view is working on 2nd click not on first click
  };
  return <Tab activeIndex={activeIndex} panes={panes} onTabChange={onClick} />;
}
const MemoizedMobilepane = memo(MobilePane)
const DesktopPane = ({
  title,
  divider,
  tagline,
  handleTitleChange,
  handleDividerChange,
  handleTagLineChange,
  frameSize,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (e, titleProps) => {
    console.log(titleProps);
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <Accordion fluid styled>
      {/* Text */}
      <Accordion.Title active={activeIndex === 2} index={2} onClick={handleClick}>
        <Icon name='dropdown' />
        Text
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
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
      </Accordion.Content>
    </Accordion>
  );
};

export default memo(MapProperties);
