import { useState, useEffect, useRef } from "react";
import { Accordion, Icon, Input, Button, Form, List, Label, Checkbox, Tab } from "semantic-ui-react";
import ButtonRadio from "./ButtonRadio";
import InputSearch from "./InputSearch";
import React from "react";
import InputLabel from "./InputLabel";
import { Pane } from "react-leaflet";

const MapProperties = (props) => {
  const [title, setTitle] = useState(title);
  const [divider, setDivider] = useState(divider);
  const [tagline, setTagline] = useState(tagline);
  const handleFrameSizeCheckboxChange = (value) => {
    setFrameSize(value);
  };
  const onPlaceSelect = (newPlace) => {
    console.log("on place select", newPlace);
    props.onPlaceChange(newPlace);
  };
  const handleTitleChange = (e) => {
    props.onTitleChange(e.target.value);
  };
  const handleDividerChange = (e) => {
    setDivider(e.target.value);
    props.onDividerChange(e.target.value);
  };
  const handleTagLineChange = (e) => {
    setTagline(e.target.value);
    props.onTagLineChange(e.target.value);
  };
  useEffect(() => {
    console.log("map propeoties rerender")


  }, [])

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
        geoLocation={props.geoLocation}
        handleTitleChange={handleTitleChange}
        handleDividerChange={handleDividerChange}
        handleTagLineChange={handleTagLineChange}
        title={props.title}
        divider={props.divider}
        tagline={props.tagline}
      />
    </div>
  );
};


const DesktopPane = ({ title, divider, tagline, handleTitleChange, handleDividerChange, handleTagLineChange }) => {
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

const MobilePane = ({ onPlaceSelect, title, divider, tagline, handleTitleChange, handleDividerChange, handleTagLineChange }) => {

  useEffect(() => {
    console.log("mobile pan rerender")


  }, [])

  const panes = [
    {
      menuItem: "Location", render: () => <Tab.Pane><div>
        <InputSearch
          onPlaceSelect={onPlaceSelect}
          centre={Geolocation}
          className="w-full"
          action={{
            icon: 'search'
          }}
          placeholder="Enter place"
          type="text" />
        <div
          className="flex flex-row justify-between mt-2"
        >
          <div className=" inline-block align-middle">
            <div className="text-xs inline-block align-middle">
              or use your current GPS position
            </div>
          </div>
          <div>
            <Button className="text-xs mr-0">Locate me</Button>
          </div>
        </div>
      </div></Tab.Pane>
    },
    { menuItem: "Style", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    {
      menuItem: "Text",
      render: () => (
        <div >
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

            <div className='flex justify-between pb-2.5' >
              <InputLabel>Tagline</InputLabel>
              <Input type='text' value={tagline} onChange={handleTagLineChange} />
            </div>
          </Tab.Pane>
        </div>
      ),
    },
    { menuItem: "Size", render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
  ];
  const onClick = () => {
    // TODO: click will get properties on viewport.
    // scroll into view is working on 2nd click not on first click
  }
  return (<Tab
    panes={panes}
    onClick={onClick}
  />)
}

export default MapProperties;
