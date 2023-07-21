import React from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { BsArrowRight } from "react-icons/bs";
import Divider from "../Divider/Divider";
import PropTypes from "prop-types";

const SectionHeading = (props) => {
  const { title = "", content = "", onClick = () => {}, btnText = "" } = props;
  return (
    <div className="section_title_wrapper">
      <div className="flex_between">
        <h1 className="clr_secondary">{title}</h1>
        <StyledButton className="small">
          {btnText} <BsArrowRight className="ml_10" />
        </StyledButton>
      </div>

      <Divider className="dashed mt_20 mb_20" />
      <p>{content}</p>
    </div>
  );
};

export default SectionHeading;

SectionHeading.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  btnText: PropTypes.string,
};
