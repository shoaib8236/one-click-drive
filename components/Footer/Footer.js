"use client"

import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react'


const Footer = (props) => {

    const { } = props;

    return (
        <div className='footer_wrapper'>

            <Row>
                <Col lg={6} md={24} sm={24}>
                    <img className="footer_logo" src="https://www.oneclickdrive.com/application/views/img/footer-logo.png?v2" />
                    <p>Find the best deals for budget and luxury / sports car rentals, chauffeur service and driver on hire service. Headquartered in Dubai, our services are available in select cities across the globe.</p>
                </Col>
                <Col lg={4} md={24} sm={24}>
                    <ul>
                        <li><Link href={""}>Dubai Car Rental FAQs</Link></li>
                        <li><Link href={""}>Car rental blog</Link></li>
                        <li><Link href={""}>list your rental car</Link></li>
                        <li><Link href={""}>rent by brand</Link></li>
                        <li><Link href={""}>yacht rental</Link></li>
                        <li><Link href={""}>Desert safari dubai</Link></li>
                        <li><Link href={""}>car with driver</Link></li>
                        <li><Link href={""}>car rental app</Link></li>
                        <li><Link href={""}>ramadan car rental offers</Link></li>
                    </ul>
                </Col>
                <Col lg={4} md={24} sm={24}>
                    <ul>
                        <li><Link href={""}>About us</Link></li>
                        <li><Link href={""}>Terms & conditions</Link></li>
                        <li><Link href={""}>Privacy policy</Link></li>
                        <li><Link href={""}>terms of use</Link></li>
                        <li><Link href={""}>contact us</Link></li>
                        <li><Link href={""}>sitemap XML</Link></li>
                    </ul>
                </Col>
                <Col lg={4} md={24} sm={24}>
                    <ul>
                        <li>
                            <h3>For Inquiries & Support</h3>
                            <div className="footer_contact_items">
                            <a href="tel:+971585672509">+971585672509</a>
                            <a href="mailto:info@oneclickdrive.com">info@oneclickdrive.com</a>
                            </div>
                        </li>
                        <li>
                            <h3>For Car with Driver</h3>
                                                       <div className="footer_contact_items">
                            <a href="tel:+971585672509">+971585672509</a>
                            <a href="mailto:info@oneclickdrive.com">info@oneclickdrive.com</a>
                            </div>
                        </li>
                        <li>
                            <h3>Advertise With Us</h3>
                                                       <div className="footer_contact_items">
                            <a href="tel:+971585672509">+971585672509</a>
                            <a href="mailto:info@oneclickdrive.com">info@oneclickdrive.com</a>
                            </div>
                        </li>
                    </ul>
                </Col>
                <Col lg={6} md={24} sm={24}>
                    <ul>
                        <li>
                            <h3>Address</h3>
                        </li>


                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Footer