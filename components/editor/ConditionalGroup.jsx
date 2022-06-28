import React, { useState } from "react";
const ConditionalGroup = ({ contents, activeIndex }) => {
  const [activeIndex, setActiveIndex] = useState(activeIndex);
  const handleItemClick = (index) => {
   
    setActiveIndex(index);
  };
  
  return (
    <div className='flex flex-row w-full'>
      {contents?.map((content, index) => (
        <div className={`text-center grow`} onClick={() => handleItemClick(index)}>
          {content.render(index === activeIndex ? true: false)}
        </div>
      ))}
    </div>
  );
};

ConditionalGroup.defaultProps = {
  activeIndex: 0,
};

export default ConditionalGroup;
