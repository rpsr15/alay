import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const ButtonCheckbox = ({ label, value, price, checked, onChange }) => {
  const handleRadioChange = () => {
    onChange(value);
  };

  return (
    <div
      onClick={handleRadioChange}
      value={value}
      className={`${
        checked ? "bg-oyster-bay" : "bg-white"
      } font-playfair border  mb-2 w-full py-2 px-1`}>
      <input className='hidden' type='radio' name='ravi' value={value} checked={checked} readOnly />
      <label className={"w-full ml-4"}>{label}</label>
      <label className='float-right mr-4'>{price}</label>
    </div>
  );
};
ButtonCheckbox.defaultProps = {
  value: "",
  checked: false,
};

export default ButtonCheckbox;
