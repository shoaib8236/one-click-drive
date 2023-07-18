import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";

const MultiSlider = (props) => {
  const {
    superLargeDesktop = {
      max: 4000,
      min: 3000,
      items: 5,
    },

    desktop = {
      max: 3000,
      min: 1024,
      items: 3,
    },

    tablet = {
      max: 1024,
      min: 464,
      items: 2,
    },

    mobile = {
      max: 464,
      min: 0,
      items: 1,
    },
    swipeable = false,
    draggable = true,
    showDots = false,
    ssr = true,
    infinite = true,
    autoPlay = true, // example this.props.deviceType !== "mobile" ? true : false
    autoPlaySpeed = 3000,
    keyBoardControl = true,
    customTransition = "",
    transitionDuration = 100,
    containerClass = "",
    removeArrowOnDeviceType = [],
    deviceType = '',
    dotListClass = "",
    itemClass = "",
    arrows = false,
    children
  } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: superLargeDesktop.max, min: superLargeDesktop.min },
      items: superLargeDesktop.items,
    },
    desktop: {
      breakpoint: { max: desktop.max, min: desktop.min },
      items: desktop.items,
    },
    tablet: {
      breakpoint: { max: tablet.max, min: tablet.min },
      items: tablet.items,
    },
    mobile: {
      breakpoint: { max: mobile.max, min: mobile.min },
      items: mobile.items,
    },
  };

  return (
    <>
      <Carousel
        swipeable={swipeable}
        draggable={draggable}
        showDots={showDots}
        arrows={arrows}
        ssr={ssr}
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={autoPlaySpeed}
        keyBoardControl={keyBoardControl}
        customTransition={customTransition}
        transitionDuration={transitionDuration}
        containerClass={containerClass}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        deviceType={deviceType}
        dotListClass={dotListClass}
        itemClass={itemClass}
        responsive={responsive}>
       {children}
      </Carousel>
    </>
  );
};

export default MultiSlider;

MultiSlider.propTypes = {
  superLargeDesktop: PropTypes.object,
  desktop: PropTypes.object,
  tablet: PropTypes.object,
  mobile: PropTypes.object,
  swipeable: PropTypes.bool,
  draggable: PropTypes.bool,
  showDots: PropTypes.bool,
  ssr: PropTypes.bool,
  infinite: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlaySpeed: PropTypes.number,
  keyBoardControl: PropTypes.bool,
  customTransition: PropTypes.string,
  transitionDuration: PropTypes.number,
  containerClass: PropTypes.string,
  removeArrowOnDeviceType: PropTypes.array,
  deviceType: PropTypes.string,
  dotListClass: PropTypes.string,
  itemClass: PropTypes.string,
  arrows: PropTypes.bool,
  children: PropTypes.node
};
