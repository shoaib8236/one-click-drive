import React from "react";
import PropTypes from "prop-types";
import Divider from "../Divider/Divider";
import { StyledButton } from "../StyledButton/StyledButton";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineEventSeat, MdOutlineFavoriteBorder } from "react-icons/md";
import { MdLuggage } from "react-icons/md";
import Badge from "../Badge/Badge";
import {BsCheck2} from "react-icons/bs"
import {AiOutlineInfo} from "react-icons/ai"

const VehicleCard = (props) => {
  const { data = {}, className = "" } = props;

  return (
    <div className={`styled_vehicle_card ${className}`}>
      <img
        className="vehicle_image"
        src="https://www.oneclickdrive.com/car-for-rent/home/Land-Rover_Range-Rover-Vogue-HSE_2022_14507_14507_895893480-1_small.jpg"
        alt=""
      />
      <div className="favorite flex_center">
        <StyledButton className="rounded sm m_0 secondary"><MdOutlineFavoriteBorder /> </StyledButton>
      </div>
      <div className="content_section">
        <h2 className="title clr_primary">{data.title}</h2>
        <div className="car_rental_details">
          <p>
            <span className="font_semi_bold clr_primary">AED 70</span>{" "}
            <span className="font_semi_bold">Day</span> <span>250km</span>
          </p>
          <p>
            <span className="font_semi_bold clr_primary">AED 70</span>{" "}
            <span className="font_semi_bold">Month</span> <span>250km</span>
          </p>
        </div>
        <div className="other_details">
          <div className="right_details_area">
              <p className="">
    
              1 day rental available
              </p>
              <p className="">
       
                Deposit: AED 4000
              </p>
              <p className="">
                Insurance Included
              </p>
            </div>
            
        </div>
       
        <div className="tags">
          <span>SUV</span>
          <span>
            4 <GiCarDoor />
          </span>{" "}
          <span>
            4 <MdOutlineEventSeat />
          </span>{" "}
          <span>
            4 <MdLuggage />
          </span>
        </div>
        <div className="left_details_area">
            <Badge className="xsm success mr_5"/>
            <img src="https://www.oneclickdrive.com/application/views/img/company/friends-car-rental-lg.jpg" alt="" />
          </div>
      </div>
    </div>
  );
};

export default VehicleCard;

VehicleCard.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};
