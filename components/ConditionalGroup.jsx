import React, { useState } from "react";

const ConditionalGroup = ({ contents, onChange, activeIndex, activeClass }) => {
  const [activeIndex, setActiveIndex] = useState(activeIndex);
  const handleItemClick = (index) => {
    onChange(index);
    setActiveIndex(index);
  };
  return (
    <div className='flex flex-row w-full'>
      {contents?.map((content, index) => (
        <div className={` grow ${index === activeIndex ? activeClass : ""}`} onClick={() => handleItemClick(index)}>
          {content.render()}
        </div>
      ))}
    </div>
  );
};

ConditionalGroup.defaultProps = {
  activeIndex: 0,
};

export default ConditionalGroup;
