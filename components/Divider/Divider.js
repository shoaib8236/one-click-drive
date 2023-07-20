import React from "react";
import PropTypes from "prop-types";

const Divider = (props) => {
  const {
    className = "",
    style = {},
    title = "",
    titlePosition = "center",
  } = props;
  return (
    <div style={style} className={`styled_divider ${className}`}>
      <span className={`divider_title ${titlePosition}`}>{title}</span>
    </div>
  );
};

export default Divider;

Divider.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titlePosition: PropTypes.string,
  style: PropTypes.object,
};
