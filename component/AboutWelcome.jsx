import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import welstyle from "../styles/Welcome.module.css";
import Masonry from "react-masonry-css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import welcomestyle from "../styles/Aboutwelcome.module.css";

const AboutWelcome = () => {
  const breakpoints = {
    default: 3,
    1199: 3,
    700: 2,
    567: 1,
  };
  return (
    <>
      <div className={welcomestyle.about_welcome}>
        <Container>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={welstyle.love_main_heading}>
              <label className={welstyle.love_title}>
                Welcome to our CHURCH
              </label>
              <h2 className={welstyle.love_heading}> love and compassion</h2>
              <p className={welstyle.parag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </AnimationOnScroll>
          <Row>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className={welstyle.Subheadline_col1}
                >
                  <Image
                    src="/image/loveimg1.svg"
                    className={welcomestyle.loveimg1}
                  />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className={welstyle.Subheadline_col2}
                >
                  <Image
                    src="/image/loveimg2.svg"
                    className={welcomestyle.loveimg2}
                  />
                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  className={welstyle.Subheadline_col3}
                >
                  <Image
                    src="/image/loveimg3.svg"
                    className={welcomestyle.loveimg3}
                  />
                </Col>
              </Masonry>
            </AnimationOnScroll>
          </Row>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className={welcomestyle.bottom_content}>
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <label className={welcomestyle.bottom_title}>
                  OUR MISSIOn & Vision
                </label>
                <h4 className={welcomestyle.bottom_heading}>
                  STRIVING FOR A BETTER TOMORROW
                </h4>
                <p className={welcomestyle.bottom_prag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </Col>
              <Col xl={4} lg={4} md={6} sm={12} xs={12}>
                <label className={welcomestyle.bottom_title}>
                  OUR MISSIOn & Vision
                </label>
                <h4 className={welcomestyle.bottom_heading}>
                  STRIVING FOR A BETTER TOMORROW
                </h4>
                <p className={welcomestyle.bottom_prag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </Col>
            </div>
          </AnimationOnScroll>
        </Container>
      </div>
    </>
  );
};
export default AboutWelcome;
