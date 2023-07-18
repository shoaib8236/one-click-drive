"use client";

import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import {BsCheck} from 'react-icons/bs'

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
    <div className="card_header">For UAE Residents</div>
    <div className="card_body">
      <div className="card_image">
        <img src="https://www.oneclickdrive.com/application/views/img/home_banner/1675327062rent-a-car-uae-resident.jpg?v2" alt="image"/>
      </div>
      <div className="content_area">
        <ul>
          <li> <BsCheck/>  Driving License</li>
          <li> <BsCheck/> Emirates ID</li>
          <li>(Residential Visa may be acceptable)</li>
        </ul>
      </div>
    </div>
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
