"use client";

import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import Divider from "../Divider/Divider";
const StyledCardV4 = (props) => {
  const {
    image = "https://www.oneclickdrive.com/application/views/images/luxury2.webp?clr=14.6",
    title = "Toyota",
    subtitle = "100 Cars",
    onView = () => {},
    buttonText = "View All Car",
  } = props;

  return <div className="styled_card_4">
    Testing card
  </div>;
};

export default StyledCardV4;

StyledCardV4.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onView: PropTypes.func,
  buttonText: PropTypes.string,
};
