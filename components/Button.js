import React from "react";
import PropTypes from "prop-types";
import { Button as SemanticButton } from "semantic-ui-react";

function Button({ label, bgColor }) {
  return (
    <div className={`${bgColor}`}>
      <SemanticButton>{label}</SemanticButton>
    </div>
  );
}

Button.propTypes = {};

export default Button;
