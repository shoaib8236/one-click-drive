"use client";

import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { carVariants, cardBrands, citiesOfCountry } from "@/utils/fakeData";
import { StyledButton } from "@/components/StyledButton/StyledButton";
import { Row, Col, Select } from "antd";
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

export default function Home() {
  const { Option } = Select;

  const sliderSettings = {
    superLargeDesktop: {
      min: 1200,
      max: 3000,
      items: 6,
    },
    desktop: {
      min: 992,
      max: 1600,
      items: 6,
    },
    tablet: {
      min: 768,
      max: 991,
      items: 3,
    },
    mobile: {
      min: 0,
      max: 767,
      items: 1,
    },
  };
  const carsSliderSettings = {
    superLargeDesktop: {
      min: 1200,
      max: 3000,
      items: 3,
    },
    desktop: {
      min: 992,
      max: 1600,
      items: 3,
    },
    tablet: {
      min: 768,
      max: 991,
      items: 2,
    },
    mobile: {
      min: 0,
      max: 767,
      items: 1,
    },
  };

  return (
    <>
      <Banner
        image="/home-banner.jpg"
        title="RENT A CAR IN DUBAI"
        subtitle="Book directly from local suppliers. No commission, no mark-ups."
      >
        <div className="styled_banner_content">
          <StyledSearch />
          <StyledButton className="m_0">View All Car</StyledButton>
        </div>
      </Banner>

      <Section>
        <div className="content_wrap _car_brands">
          <div className="car_inner_section">
            <h2 className="clr_primary font_semi_bold">
              Find car rental and driver services near you
            </h2>
            <div className="styled_select">
              {/* <Select placeholder="Select">
                {citiesOfCountry.map((item, index) => (
                  <Option key={index} value={item.label}>
                    {item.label}
                  </Option>
                ))}
              </Select> */}
            </div>
          </div>
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
          <div className="brand_content_area">
            <p>
              Tired of searching for a ‘rent a car near me’? You have reached
              just the right place. OneClickDrive.com is a leading car rental
              marketplace in Dubai featuring budget-friendly car hire deals from
              reliable rental car companies in the region. You can choose from
              our extensive inventory of over 2000 vehicles listed by trusted
              car rental businesses in the UAE. Whether you’re a tourist looking
              for a car facility or a resident in search of long term rentals,
              we assure you the cheapest rent cars at the best prices starting
              as low as AED 30 per day.
            </p>
          </div>

          <SectionHeading
            title="Rent A Car From Top Brands"
            content="Get on a road-trip now with the best deals for high-end cars manufactured by top automobile companies in the world."
            btnText="All Brands"
          />

          <div className="brands_slider">
            <MultiSlider {...sliderSettings}>
              {cardBrands.map((item, index) => (
                <StyledCardV2
                  className="m_10 pointer"
                  key={index}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  buttonText="View All Car"
                />
              ))}
            </MultiSlider>
          </div>

          <SectionHeading
            title="Latest Car Rental Offers in Dubai"
            content="Choose among cars with in-demand driving features and high mileage, and rent a car at the best price. Exclusive car rental discounts, updated seasonally!"
            btnText="View All"
          />

          <div className="brands_slider">
            <MultiSlider {...carsSliderSettings}>
              {cardBrands.map((item, index) => (
                <VehicleCard className="m_10 pointer" key={index} data={item} />
              ))}
            </MultiSlider>
          </div>

          <SectionHeading
            title="Luxury & Sports Cars"
            content="Drive in style! Make your first car rental a great experience with luxury rental vehicles from top brands such as Rolls Royce, BMW, Land Rover, among others."
            btnText="View All"
          />

          <div className="brands_slider">
            <MultiSlider {...carsSliderSettings}>
              {cardBrands.map((item, index) => (
                <VehicleCard className="m_10 pointer" key={index} data={item} />
              ))}
            </MultiSlider>
          </div>

          <SectionHeading
            title="SUVs for rent in Dubai"
            content="From spacious 7-seaters to the latest 5-seater sports utility vehicles, we feature a broad range of trendy SUV car rental deals in the UAE."
            btnText="View All"
          />

          <div className="brands_slider">
            <MultiSlider {...carsSliderSettings}>
              {cardBrands.map((item, index) => (
                <VehicleCard className="m_10 pointer" key={index} data={item} />
              ))}
            </MultiSlider>
          </div>

          <SectionHeading
            hideBtn
            title="Beyond Car Rentals"
            content="Explore our suite of curated services such as chauffeur, buggy and safe driver provided by exclusive partners and managed by OneClickDrive."
            btnText="View All"
          />

          <div className="brands_slider">
            <MultiSlider {...carsSliderSettings}>
              {cardBrands.map((item, index) => (
                <StyledCardV3
                  className="m_10 pointer"
                  key={index}
                  data={item}
                />
              ))}
            </MultiSlider>
          </div>

          <SectionHeading
            title="Chauffeur Service in Dubai"
            content="Our luxury chauffeur services include Point to Point, Airport Transfer and Hourly basis, provided by our hand-picked and exclusive partners."
            btnText="View All"
          />

          <div className="brands_slider">
            <MultiSlider {...carsSliderSettings}>
              {cardBrands.map((item, index) => (
                <VehicleCard className="m_10 pointer" key={index} data={item} />
              ))}
            </MultiSlider>
          </div>
        </div>
      </Section>
      <Testimonial />
      <Section>
        <div className="content_wrap rental_companies">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <h2 className="clr_primary">
                Find the best car rental company for you
              </h2>
              <Divider className="mt_20 mb_20" />
              <ul>
                <li>
                  OneClickDrive.com is the first-ever global car rental and
                  leasing marketplace. We work with 200+ local car rental
                  companies in Dubai. You can choose among their 2000+ verified
                  cars to find the best rental car for you.
                </li>
                <li>
                  Find cheap car rental deals and discounts for all types of
                  cars: be it for personal or business use. Access competitive,
                  commission-free car rental service in Dubai, Abu Dhabi,
                  Sharjah and Ajman.
                </li>
                <li>
                  Our car rental partners’ fleet include every car you’ve ever
                  dreamed of. From high-end supercar rentals such as Ferrari,
                  Lamborghini and Rolls Royce to luxury SUVs Range Rover,
                  Mercedes Benz and even economy cars such as Kia Picanto,
                  Nissan Sunny and Renault Duster.
                </li>
              </ul>
            </Col>
            <Col
              className="flex_center"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
            >
              <img src="https://www.oneclickdrive.com/application/views/img/webp_images/car-rental-and-leasing-marketplace.webp" />
            </Col>
          </Row>
        </div>
      </Section>

      <Section className="rental_deals">
        <div className="lines">
          <ul>
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </ul>
        </div>
        <div className="content_wrap">
          <MultiSlider>
            <div className="rental_deal_card">
              <div className="counts">1</div>
              <div className="rental_deal_card_header">
                <div className="deals_icon flex_center">
                  <AiFillStar />
                </div>
                <h3>Rent a Car across the UAE</h3>
              </div>
              <p>
                Combining all our suppliers’ rental fleet, you can choose from
                car types, brands, models available in the UAE. You can rent a
                small car such as a Kia Picanto starting at AED 90 / day and
                even the Lamborghini Urus for AED 3000 / day or a Rolls Royce
                Cullinan for AED 3800 / day.
              </p>
            </div>
            <div className="rental_deal_card">
              <div className="counts">2</div>
              <div className="rental_deal_card_header">
                <div className="deals_icon flex_center">
                  <AiFillStar />
                </div>
                <h3>Rent a Car across the UAE</h3>
              </div>
              <p>
                Combining all our suppliers’ rental fleet, you can choose from
                car types, brands, models available in the UAE. You can rent a
                small car such as a Kia Picanto starting at AED 90 / day and
                even the Lamborghini Urus for AED 3000 / day or a Rolls Royce
                Cullinan for AED 3800 / day.
              </p>
            </div>
            <div className="rental_deal_card">
              <div className="counts">3</div>
              <div className="rental_deal_card_header">
                <div className="deals_icon flex_center">
                  <AiFillStar />
                </div>
                <h3>Rent a Car across the UAE</h3>
              </div>
              <p>
                Combining all our suppliers’ rental fleet, you can choose from
                car types, brands, models available in the UAE. You can rent a
                small car such as a Kia Picanto starting at AED 90 / day and
                even the Lamborghini Urus for AED 3000 / day or a Rolls Royce
                Cullinan for AED 3800 / day.
              </p>
            </div>
          </MultiSlider>
        </div>
      </Section>
      <Section className="rental_process">
        <div className="content_wrap">
          <div className="content_area">
            <SectionHeading
              title="Documents Required for Car Rental in the UAE"
              content="If you’re planning a trip to the UAE, you’ll find that all major attractions in the UAE are spread far and wide. From unique shopping destinations like the Mall Of
            The Emirates, popular landmarks such as the Sheikh Zayed Grand Mosque in Abu Dhabi to exquisite hotels and resorts located in Ras Al Khaimah, the best way to get
            around is by car. You are eligible to rent a car across the emirates provided you have the below mentioned valid documents with you:"
              btnText="View All"
            />
          </div>
          <Row gutter={[20, 20]} className="mt_20">
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledCardV4 />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <StyledCardV4 />
            </Col>
          </Row>
        </div>
      </Section>
      <Section className="home_content_area">
        <div className="content_wrap">
          <div>
            <h2>Important tips for renting a car in Dubai</h2>
            <div>
              <ul>
                <li>
                  <p>
                    Choose a company that’s located near you or one that offers
                    ‘fast delivery’ in your location if you need the car with
                    pick-up and delivery service
                  </p>
                </li>
                <li>
                  <p>
                    At the time of pick up, check for existing dents and
                    scratches. Best to shoot a video circling the car and take
                    close-up pictures of existing damages, if any, share them
                    with the service provider instantly to avoid any
                    misunderstandings that may arise later
                  </p>
                </li>
                <li>
                  <p>
                    Always best to provide the security deposit by credit card
                    as a pre-authorization block, which automatically releases
                    after 20-30 days from the end date of your rental
                  </p>
                </li>
                <li>
                  <p>
                    Please be sure to sign the car rental agreement issued under
                    the same company name as advertised on OneClickDrive
                  </p>
                </li>
                <li>
                  <p>
                    Incase of any issue with the selected car rental company,
                    you may contact the OneClickDrive Team with proof of booking
                    and other details
                  </p>
                </li>
              </ul>
            </div>
            <h2>Find cheap car rental deals and discounts</h2>
            <div>
              <ul>
                <li>
                  <p>
                    Renting a car online is always the ideal way to find a cheap
                    rent a car in Dubai. However, be sure to check if you’re
                    dealing with the actual car rental supplier or an agent.
                    Your cost from the direct supplier would naturally be
                    cheaper whereas rental rates offered by agents would be
                    higher as they include a commission
                  </p>
                </li>
                <li>
                  Through OneClickDrive, you’re sure to find the cheapest car
                  rentals near you in an easy and comprehensive way. You can
                  browse live car rental offers from multiple car rental service
                  providers and decide to go ahead with the one offering the
                  best deal to you
                </li>
              </ul>
            </div>
            <h2>Top benefits for renting a car with a driver in Dubai</h2>
            <div>
              <p>
                There are a multitude of advantages of hiring a car and driver
                in the Emirates, the top three include:
              </p>
              <ul>
                <li>
                  <strong>Sit back and relax</strong>
                </li>
              </ul>
              <p>
                Let our professional chauffeur drive you and worry about the
                traffic. They know the best routes to make your journey
                comfortable.
              </p>
              <ul>
                <li>
                  <strong>Pre-decided rates</strong>
                </li>
              </ul>
              <p>
                Our prices are transparent. They are all-inclusive of the no. of
                hours booked within the city limits.
              </p>
              <ul>
                <li>
                  <strong>Top class concierge</strong>
                </li>
              </ul>
              <p>
                OneClickDrive connects you to only the most reputed and
                dependable chauffeur service companies based in the UAE.
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        
      </Section>
      <Section className="faq_home">
        <div className="content_wrap">
          <Faq />
        </div>
      </Section>
      
    </>
  );
}
