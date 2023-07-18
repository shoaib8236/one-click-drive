"use client";

import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import Divider from "../Divider/Divider";

const StyledCardV1 = (props) => {
  const {
    image = "https://www.oneclickdrive.com/application/views/images/luxury2.webp?clr=14.6",
    title = "Toyota",
    subtitle = "100 Cars",
    onView = () => {},
    buttonText = "View All Car",
  } = props;

  return (
    <div className="styled_card_1">
      <div className="card_image">
        <img src={image} alt="" />
      </div>
      <Divider className="mb_20" />
      <div className="card_content">
        <h3 className="clr_primary font_semi_bold">{title}</h3>
        <p>{subtitle}</p>
        <StyledButton onClick={onView} className="m_0 x_small transparent PX_0">
          {buttonText}
        </StyledButton>
      </div>
    </div>
  );
};

export default StyledCardV1;

StyledCardV1.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onView: PropTypes.func,
  buttonText: PropTypes.string,
};
