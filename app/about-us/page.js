"use client";

import dynamic from "next/dynamic";
import {Row, Col, Select} from "antd";
import Link from "next/link";
import Image from "next/image";
import {BiCircle} from "react-icons/bi";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

const Section = dynamic(() => import('@/components/Section/Section'))
const YtPlayer = dynamic(() => import('@/components/YtPlayer/YtPlayer'))
const FramedVideo = dynamic(() => import('@/components/FramedVideo/FramedVideo'))
const Divider = dynamic(() => import('@/components/Divider/Divider'));
const StyledButton = dynamic(() => import('@/components/StyledButton/StyledButton').then((module) => module.StyledButton));
const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Faq = dynamic(() => import('@/components/Faq/Faq'));


const AboutUs = () => {
    return (<div className={"about_wrapper"}>
        <Banner title={"Welcome to OneClickDrive"}
                subtitle={"where we make renting cars easy. We are UAE’s leading car rental portal. We connect you to our extensive network of rental partners that offer the best deals and cars to fit your every need."}>
            <div className={"flex_center"}>
                <Link className={"clr_light"} href={"/"}>Home</Link> <span
                className={"clr_light mr_10 ml_10"}>/</span> <Link className={"clr_light"} href={"about-us"}>About
                Us</Link>
            </div>
        </Banner>
        <Section className={"bg_lime"}>
            <div className={"content_wrap"}>
                <h1>About Us</h1>
                <p>
                    Welcome to OneClickDrive, where we make renting cars easy. We are UAE’s leading car rental
                    portal. We connect you to our extensive network of rental partners that offer the best deals and
                    cars to fit your every need.
                </p>
                <p>
                    Experience a hassle-free booking process by exploring car rentals on our website and mobile app.
                    Find the best deals for budget, <span
                    className={"clr_secondary"}>luxury and sports car rentals,</span> car with driver and
                    driver-on-hire services within Dubai, Abu Dhabi, Sharjah and in select cities across the globe.
                </p>
                <p>Our car rental service providers offer the lowest prices for a wide range of cars. Choose from
                    flexible rental options ranging between daily, weekly, monthly-basis, as well as customized
                    deals as per your requirement.</p>
                <p>Travel with ease by experiencing our additional partner services, including 24x7 chauffeur and
                    airport transfer service, and on-demand driver service, at the lowest, all-inclusive rates.
                    Choose from a curated range of executive and luxury cars driven by professional chauffeurs, and
                    travel freely at your own pace.</p>
            </div>
        </Section>
        <Section>
            <div className={"content_wrap"}>
                <div className={"about_cards_wrap"}>
                    <h1 className={"text_center"}>What <span className={"clr_secondary"}>sets us</span> apart</h1>
                    <Row className={"about_cards_row"} gutter={[20, 20]}>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className={"about_card_box"}>
                                <div className={"image_wrap"}>
                                    <Image src={"/traffic-jam.webp"} alt={"cars"} height={70} width={70}
                                           objectFit={"contain"}/>
                                </div>
                                <h2 className={"text_center clr_secondary"}>Exclusive Cars</h2>
                                <p className={"text_center"}>Whether you’re looking for budget-friendly cars or
                                    exclusive luxury and sports cars, we have you covered.</p>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className={"about_card_box"}>
                                <div className={"image_wrap"}>
                                    <Image src={"/booking.webp"} alt={"cars"} height={70} width={70}
                                           objectFit={"contain"}/>
                                </div>
                                <h2 className={"text_center clr_secondary"}>Exclusive Cars</h2>
                                <p className={"text_center"}>Whether you’re looking for budget-friendly cars or
                                    exclusive luxury and sports cars, we have you covered.</p>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <div className={"about_card_box"}>
                                <div className={"image_wrap"}>
                                    <Image src={"/new-car.webp"} alt={"cars"} height={70} width={70}
                                           objectFit={"contain"}/>
                                </div>
                                <h2 className={"text_center clr_secondary"}>Exclusive Cars</h2>
                                <p className={"text_center"}>Whether you’re looking for budget-friendly cars or
                                    exclusive luxury and sports cars, we have you covered.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Section>
        <Section className={"bg_lime"}>
            <div className={"content_wrap"}>
                <Row gutter={[20, 20]}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <YtPlayer videoId={"tsr7UFi-rjs"}/>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <div className={"p_20"}>
                            <h2 className={"clr_secondary"}>Mission</h2>
                            <p>Our core purpose is to be your gateway to the local car rental industry across the
                                world and make the process of renting cars easy and transparent.</p>
                            <br/>
                            <h2 className={"clr_secondary"}>Vision</h2>
                            <p>

                                Our vision is to be the world’s leading car rental portal and add value to our
                                users’ experiences through constant innovation and improvements.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Section>
        <Section>
            <div className={"content_wrap"}>
                <h2 className={"text_center"}>The <span className={"clr_secondary"}>OneClickDrive</span> Experience
                </h2>
                <Row>
                    <Col lg={14} md={24} sm={24} xs={24}>
                        <h2 className={"clr_secondary"}>For Users</h2>
                        <ul className={"pad_sm"}>
                            <li>Explore our portal and book the car of your choice at all-inclusive prices in just a
                                few
                                clicks
                            </li>
                            <li>Book directly from our verified car rental partners and be assured of expert service
                            </li>
                            <li>Compare using various filters like car brand, model, location, budget and other
                                features
                                to find a car as per your requirements
                            </li>
                            <li>Book chauffeur-driven cars and driver-on-demand with ease from reputed service
                                providers
                            </li>
                            <li>Contact our rental partners instantly through phone, email, and WhatsApp</li>
                            <li>Compare live car rental offers from multiple companies at a glance</li>
                            <li>We follow a stringent onboarding process of our rental partners, assuring the best
                                service and quality
                            </li>
                            <li>Each car is verified with real photos before being listed on our portal so you can
                                book
                                confidently
                            </li>
                            <li>Reverse the search by submitting a ‘Find Me A Car’ request to get rental quotes from
                                multiple companies
                            </li>
                        </ul>
                        <div className={"flex_center mt_30"}><StyledButton>Start Renting</StyledButton></div>
                    </Col>
                    <Col lg={10} md={24} sm={24} xs={24}>
                        <div className={"p_20 bg_lime"}>
                            <h1 className={"clr_secondary"}>For Partners</h1>
                            <p>Car Rental Companies</p>
                            <div className={"about_small_card"}>
                                <Image src={"/growth.webp"} alt={"image"} height={40} width={40}/>
                                <p>
                                    Grow your business and increase your visibility by partnering with <Link
                                    href={"/"}>OneClickDrive</Link>
                                </p>
                            </div>
                            <div className={"about_small_card"}>
                                <Image src={"/booking.webp"} alt={"image"} height={40} width={40}/>
                                <p>
                                    Grow your business and increase your visibility by partnering with <Link
                                    href={"/"}>OneClickDrive</Link>
                                </p>
                            </div>
                            <div className={"about_small_card"}>
                                <Image src={"/speedometer.webp"} alt={"image"} height={40} width={40}/>
                                <p>
                                    Grow your business and increase your visibility by partnering with <Link
                                    href={"/"}>OneClickDrive</Link>
                                </p>
                            </div>
                            <div className={"about_small_card"}>
                                <Image src={"/dashboard.webp"} alt={"image"} height={40} width={40}/>
                                <p>
                                    Grow your business and increase your visibility by partnering with <Link
                                    href={"/"}>OneClickDrive</Link>
                                </p>
                            </div>
                            <div className={"flex_center"}>
                                <StyledButton>List Your Car</StyledButton>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Section>
        <Section className={"bg_lime"}>
            <div className={"content_wrap"}>
                <Row gutter={[20, 20]}>
                    <Col lg={16} md={24} sm={24} xs={24}>
                        <h1> How to <span className={"clr_secondary"}>rent</span> a car</h1>
                        <ul className={"how_rent_car"}>
                            <li>
                                <p>Browse offers on OneClickDrive.com</p>
                                <p className={"ml_10 flex_start"}><BiCircle className={"mr_10"}/> Register and use our
                                    mobile app for a better experience</p>
                            </li>
                            <li>
                                <p>Select your preferred car among hundreds of options</p>
                                <p className={"ml_10 flex_start"}><BiCircle className={"mr_10"}/> Narrow down your
                                    search by using the filters, as per your requirement</p>
                            </li>
                            <li>
                                <p>Connect with listed suppliers offering the car(s) you wish to hire and mention your
                                    required dates</p>
                                <p className={"ml_10 flex_start"}><BiCircle className={"mr_10"}/> You can contact them
                                    directly via Phone or WhatsApp</p>
                                <div className={"ml_10"}>
                                    <p className={"ml_10 flex_start"}>
                                        Rental fee and deposit payment can be made by Card or Cash at the time of
                                        delivery
                                    </p>
                                    <p className={"ml_10 flex_start"}>
                                        Share your feedback with us if the company is unresponsive or the car is
                                        unavailable
                                    </p>
                                </div>
                            </li>
                            <li>
                                <p>Book with the company of your choice</p>
                            </li>
                            <li>
                                <p>Drive away!</p>
                            </li>
                        </ul>

                        <h1 className={"clr_secondary"}>Important Tips</h1>
                        <ul className={"how_rent_car"}>
                            <li>
                                <p>At the time of car delivery, check for existing dents and scratches</p>
                                <p className={"ml_10 flex_start"}><BiCircle className={"mr_10"}/> Shoot a video and
                                    share with the service provider beforehand</p>
                            </li>
                            <li>
                                <p>Be sure to deal with the same company as listed on OneClickDrive</p>
                                <p className={"ml_10 flex_start"}><BiCircle className={"mr_10"}/> Save a copy of the car
                                    rental agreement</p>
                            </li>

                        </ul>
                    </Col>
                    <Col className={"flex_center"} lg={8} md={24} sm={24} xs={24}>
                        <FramedVideo/>
                    </Col>
                </Row>
            </div>
        </Section>
        <Section>
            <ImageGallery/>
        </Section>
    </div>)
}

export default AboutUs