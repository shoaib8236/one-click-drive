import React from "react";
import PropTypes from "prop-types";
import {StyledButton} from "../StyledButton/StyledButton"

const StyledCardV3 = (props) => {
  const { className } = props;

  return (
    <div className={`${className} styled_card_v3_wrapper`}>
      <div className={`styled_card_v3`}>
        <img
          src="https://www.oneclickdrive.com/application/views/img/yacht-banner.jpg?v=1"
          alt=""
        />
        <div className="card_overlay flex_center">
          Yatch rental in dubai
        </div>
      </div>
    </div>
  );
};

export default StyledCardV3;

StyledCardV3.propTypes = {
  className: PropTypes.string,
};
