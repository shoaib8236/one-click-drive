import React from "react";
import dynamic from "next/dynamic";
const MultiSlider = dynamic(() => import("../MultiSlider/MultiSlider"));
const Section = dynamic(() => import("../Section/Section"));
const Divider = dynamic(() => import("../Divider/Divider"));
const Col = dynamic(() => import("antd").then((antd) => antd.Col));
const Row = dynamic(() => import("antd").then((antd) => antd.Row));
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {

  const sliderSettings = {
    superLargeDesktop: {
      min: 1200,
      max: 3000,
      items: 1,
    },
    desktop: {
      min: 992,
      max: 1600,
      items: 1,
    },
    tablet: {
      min: 768,
      max: 991,
      items: 1,
    },
    mobile: {
      min: 0,
      max: 767,
      items: 1,
    },
  };

  return (
    <Section className="testimonial_section">

    <div className="content_wrap">
    <div className="testimonial_wrapper">

      <h1 className="clr_light testimonial_title_main">Testimonials <br/> 
      {/* <Divider className="dashed mt_20" /> */}
      </h1>

              
      <div className="testimonial_container">
        <Row>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="testimonial_title">
              <h2 className="clr_light">Our Community</h2>
              {/* <Divider className="dashed mt_20 mb_20" /> */}
              <p className="clr_light">
                The experiences shared by our distinguished users have always helped us up our game. The OneClickDrive Marketplace is often reengineered as we follow a "Listen
                Understand Improve" cycle
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div className="testimonial_slider">
              <MultiSlider {...sliderSettings}>
                {[
                  1,2,3,4,5
                ].map((item)=> (
                  <div className="testimonial_card_wrapper">
                  <div className="testimonial_user_wrapper mb_10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&usqp=CAU" />
                    <div className="ml_10">
                      <h3 className="clr_light">John doe {item}</h3>
                    <p className="clr_light">May 25 2023</p>
                    <div className="flex_center mt_10"></div>
                      
                      <AiFillStar className="mr_10 clr_light"/>
                      <AiFillStar className="mr_10 clr_light"/>
                      <AiFillStar className="mr_10 clr_light"/>
                      <AiFillStar className="mr_10 clr_light"/>
                      <AiFillStar className="mr_10 clr_light"/>
                    </div>
                  </div>
                  <div className="testimonial_content">
                    <h2 className="clr_light">Service was excellent</h2>
                    <p className="clr_light">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying
                      on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </p>
                    <p className="flex_start clr_light">
                      Source: <img className="ml_10" src="https://www.oneclickdrive.com/application/views/img/google-01.svg" />
                    </p>
                  </div>
                </div>
                ))}
                
              </MultiSlider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </div>
    </Section>
  );
};

export default Testimonial;
