import React, { useState } from "react";
import PropTypes from "prop-types";
import { Visibility, Image, Loader, Placeholder } from "semantic-ui-react";

const LazyImage = (props) => {
  const [show, setShow] = useState(false);
  const showImage = () => {
    setShow(true);
  };
  const { size } = props;
  return show === true ? (
    <Image {...props} />
  ) : (
    <Visibility as='span' onTopVisible={showImage}>
       <Placeholder >
    <Placeholder.Image square/>
  </Placeholder>
    </Visibility>
  );
};

LazyImage.defaultProps = {
  size: "medium",
};
LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default LazyImage;
