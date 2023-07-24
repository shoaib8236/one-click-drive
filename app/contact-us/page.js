'use client'

import dynamic from "next/dynamic";
import {StyledButton} from "@/components/StyledButton/StyledButton";
import {Row, Col, Select, Form, Input} from "antd";
import Link from "next/link";
import {AiFillCar, AiFillFacebook, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF, FaMapMarkerAlt} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {GrLinkedinOption} from "react-icons/gr";
import Image from "next/image";
import MapComponent from "@/components/MapComponent/MapComponent";
import {carVariants} from "@/utils/fakeData";

const Section = dynamic(() => import('@/components/Section/Section'));
const StyledSearch = dynamic(() => import('@/components/StyledSearch/StyledSearch'));
const Divider = dynamic(() => import('@/components/Divider/Divider'));
const MultiSlider = dynamic(() => import('@/components/MultiSlider/MultiSlider'));
const VehicleCard = dynamic(() => import('@/components/VehicleCard/VehicleCard'));
const StyledCardV1 = dynamic(() => import('@/components/StyledCardV1/StyledCardV1'));
const StyledCardV2 = dynamic(() => import('@/components/StyledCardV2/StyledCardV2'));
const StyledCardV3 = dynamic(() => import('@/components/StyledCardV3/StyledCardV3'));
const StyledCardV4 = dynamic(() => import('@/components/StyledCardV4/StyledCardV4'));
const Testimonial = dynamic(() => import('@/components/Testimonial/Testimonial'));
const SectionHeading = dynamic(() => import('@/components/SectionHeading/SectionHeading'));
const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Faq = dynamic(() => import('@/components/Faq/Faq'));
const ContactUs = () => {

    const {Option} = Select;
    const {TextArea} = Input;

    return (
        <div className={"contact_wrapper"}>
            <Banner subtitle={"Need assistance with a car rental service provider? Or wondering how to partner up?"}
                    title={"Contact Us"}>
                <div className={"flex_center"}>
                    <Link className={"clr_light"} href={"/"}>Home</Link> <span
                    className={"clr_light mr_10 ml_10"}>/</span> <Link className={"clr_light"} href={"/contact-us"}>Contact
                    Us</Link>
                </div>
            </Banner>
            <Section>
                <div className={"content_wrap"}>
                    <h1 className={"clr_secondary"}>Contact Us | OneClickDrive</h1>
                    <p>Need assistance with a car rental service provider? Or wondering how to partner up?</p>
                    <Row gutter={[20, 20]}>
                        <Col lg={14} md={12} sm={24} xs={24}>
                            <Form layout={"vertical"}>
                                <Row gutter={[20, 20]}>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <Form.Item className={"styled_input"} name={"name"} label={'Name'}>
                                            <Input placeholder={"Name"}/>
                                        </Form.Item>
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <Form.Item className={"styled_input"} name={"phone"} label={'Contact No'}>
                                            <Input placeholder={"Contact no"}/>
                                        </Form.Item>
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <Form.Item className={"styled_input"} name={"email"} label={'Email'}>
                                            <Input placeholder={"Email"}/>
                                        </Form.Item>
                                    </Col>
                                    <Col lg={24} md={24} sm={24} xs={24}>
                                        <Form.Item className={"styled_select"} name={"query"} label={'Query'}>
                                            <Select>
                                                <Option value={""}>
                                                    Select
                                                </Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Form.Item className={"styled_textarea"} name={"message"} label={'Message'}>
                                    <TextArea/>
                                </Form.Item>
                                <div className={"flex_end"}><StyledButton>Submit</StyledButton></div>
                            </Form>
                        </Col>
                        <Col lg={10} md={12} sm={24} xs={24}>
                            <h2 className={"clr_secondary"}>Are you a car rental company?</h2>
                            <StyledButton>List Your Car With Us</StyledButton>
                            <div className={"map_box"}>
                                <MapComponent/>
                            </div>
                            <div className={"link_icons"}>
                                <StyledButton className={"small"}>
                                    <FaFacebookF/>
                                </StyledButton>
                                <StyledButton className={"small"}>
                                    <BsInstagram/>
                                </StyledButton>
                                <StyledButton className={"small"}>
                                    <AiOutlineTwitter/>
                                </StyledButton>
                                <StyledButton className={"small"}>
                                    <GrLinkedinOption/>
                                </StyledButton>
                                <StyledButton className={"small"}>
                                    <FaMapMarkerAlt/>
                                </StyledButton>
                                <StyledButton className={"small"}>
                                    <AiFillCar/>
                                </StyledButton>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Section>

            <Section className={"bg_dark clip_path"}>
                <div className={"content_wrap"}>
                    <Row>
                        <Col className={"flex_column_between"} lg={12} md={12} sm={24} xs={24}>
                            <h1 className={"clr_light"}>Get the OneClickDrive Car Rental Appon your smartphone today!</h1>
                            <ul className={"styled_contact_list"}>
                                <li>Find offers with detailed info </li>
                                <li>Direct Supplier booking process </li>
                                <li> Available in 30+ cities</li>
                            </ul>
                        </Col>                        
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <img src={"https://www.oneclickdrive.com/img/oneclickdrive-car-rental-app-screens.png"} alt={"image"}/>
                        </Col>
                    </Row>
                </div>
            </Section>

            <Section>
                <div className={"content_wrap"}>
                    <Row gutter={[16, 16]}>
                        {carVariants.map((item, index) => (
                            <Col key={index} xs={24} sm={12} md={6} lg={6} xl={6}>
                                <StyledCardV1
                                    image={item.image}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    buttonText="View All Car"
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Section>

            <Section>
                <div className={"content_wrap"}>
                    <Faq/>
                </div>
            </Section>
        </div>
    )
}
export default ContactUs