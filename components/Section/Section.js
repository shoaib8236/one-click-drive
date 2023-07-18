import React from "react";
import PropTypes from "prop-types";

const Section = (props) => {
  const { children, className = "" } = props;

  return <section className={`styled_section ${className}`}>{children}</section>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
