'use client'

import React from 'react'
import dynamic from "next/dynamic"
import {Col, Row} from "antd";

const Section = dynamic(() => import('@/components/Section/Section'));
const Faq = dynamic(() => import('@/components/Faq/Faq'));
const CarsFilters = dynamic(() => import('@/components/CarsFilters/CarsFilters'));
const StyledCollapsed = dynamic(() => import('@/components/StyledCollapsed/StyledCollapsed'));
const Divider = dynamic(() => import('@/components/Divider/Divider'));
const VehicleCard = dynamic(() => import('@/components/VehicleCard/VehicleCard'));

const CarBrand = ()=> {
    return (
        <div className="car_brand_main">
            <Section>
                <div className="content_wrap">
                    <div className={"content_area"}>
                        <CarsFilters/>
                        <div className="cars_showcase">
                            <h2>RENT A CAR IN DUBAI ON DAY, WEEK, MONTH-BASIS</h2>
                            <p>Choose from a range of cars at the best, direct-from-supplier rates</p>
                            <StyledCollapsed itemShow={8}/>
                            <Divider className={"mb_30 mt_30"}/>
                            <Row gutter={[20,20]}>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>
                                <Col lg={8} md={12} sm={24} xs={24}>
                                    <VehicleCard data={{title:"Toyota"}} showSocialLinks showVerified/>
                                </Col>

                            </Row>
                        </div>
                    </div>
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

export default CarBrand