"use client";

import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

const Banner = (props) => {
  const {
    title = "default title",
    subtitle = "default subtitle",
    image = "",
    videoUrl = "",
    banner_type = "default_banner",
    children 
  } = props;

  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   let contentHeight = contentRef.current?.getBoundingClientRect().height / 2;
  //   if (contentHeight) {
  //     bannerRef.current.style.marginBottom = `${contentHeight}px`;
  //   }
  // }, []);

  return (
    <div ref={bannerRef} className="styled_banner">
      {banner_type === "default_banner" && <img className="banner_image" src={image} alt="" />}
      {banner_type === "video" && (
        <video muted autoPlay loop playsInline>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="overlay"></div>
      <div ref={contentRef} className="content_area">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  videoUrl: propTypes.string.isRequired,
  banner_type: propTypes.string.isRequired,
  children: propTypes.node,
};
