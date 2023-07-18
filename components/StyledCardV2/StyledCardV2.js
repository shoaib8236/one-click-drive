import React from "react";
import PropTypes from "prop-types";
import Divider from './../Divider/Divider';

const StyledCardV2 = (props) => {
  const { className = "", image = "", title = "", subtitle = "", onClick=()=> {} } = props;

  return (
    <div onClick={onClick} className={`styled_card_v2 ${className}`}>
      <img src={image} alt="" />
    <Divider className="dotted mb_20"/>
      <div className="styled_card_v2_content">
        <h3 className="clr_primary font_semi_bold">{title}</h3>
        <p className="clr_grey">{subtitle}</p>
      </div>
    </div>
  );
};

export default StyledCardV2;


StyledCardV2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
    onClick: PropTypes.func,
};
