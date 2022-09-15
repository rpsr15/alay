import React, { useEffect } from "react";
import {  Radio } from "@nextui-org/react";
// import styled from "styled-components";
// const RadioGroup = styled(Radio.Group)`
 
//   & .nextui-radio-label {
//     display: inline;
//     width: 100%;
//   }
//   &
// `;

const TypeSelection = ({ items, defaultIndex, onChecked }) => {
  const [checked, setChecked] = React.useState(items[defaultIndex].value);
  const handleItemChecked = (value) => {
    onChecked(value);
    setChecked(value);
  };
  
  return (
    <Radio.Group
      className='type-selection'
      orientation='horizontal'
      size='sm'
      value={checked}
      onChange={handleItemChecked}>
      {items.map((item) => (
        <Radio  color="warning" value={item.value} key={item.value}>
          <div>
            <div>{item.name}</div>
            <div>
              <img src={item.url} />
            </div>
          </div>
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default TypeSelection;
