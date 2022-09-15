import React from "react";
import PropTypes from "prop-types";
import { Button as NextButton } from "@nextui-org/react";
function Button({ children, size, bgColor, color }) {
  return (
    <NextButton className={`${bgColor} ${color} w-full rounded-none`} size={size}>
      {children}
    </NextButton>
  );
}

Button.propTypes = {};

export default Button;
