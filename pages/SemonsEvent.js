import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Image, Row } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import semostyle from "../styles/SemonsEvent.module.css";
import eventstyle from "../styles/Event.module.css";
import Upcomingjson from "../json/upcoming.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const SemonsEvent = () => {
  const [upcomingDate] = useState(Upcomingjson);

  return (
    <>
      <div
        className="semons_event_section"
        style={{ backgroundColor: "#F5F2F0" }}
      >
        <Header />
        <Container>
          {/* <h1>Event page </h1> */}
          <div className={semostyle.semons_main}>
            <Row>
              {/* <div className={semostyle.article_section}> */}
              <Col
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className={semostyle.article_section}
              >
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  <Image
                    src="/image/article.svg"
                    className={semostyle.articleimg}
                  />
                </AnimationOnScroll>
                <div className={semostyle.article_content}>
                  <label className={semostyle.article_title}>
                    Upcoming Event
                  </label>
                  <AnimationOnScroll animateIn="animate__bounceIn">
                    <h2 className={semostyle.article_heading}>
                      HOW TO TRULY TRUST SOMEONE
                    </h2>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                    <p className={semostyle.article_parg}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Dui faucibus in ornare quam viverra orci sagittis
                      eu volutpat. Pharetra sit amet aliquam id diam maecenas
                      ultricies.
                    </p>
                    <p className={semostyle.article_parg}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Dui faucibus in ornare quam viverra orci sagittis
                      eu volutpat. Pharetra sit amet aliquam id diam maecenas
                      ultricies.
                    </p>
                  </AnimationOnScroll>
                </div>
              </Col>

              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <AnimationOnScroll animateIn="animate__fadeInDown">
                  <div className={semostyle.register}>
                    <h4 className={semostyle.register_heading}>rEGISTER nOW</h4>
                    <div className={semostyle.address_date}>
                      <img src="/image/location.svg" class="locationicon" />
                      <span className={semostyle.address}>
                        No 233 Main St. New York, United States
                      </span>
                      {/* <img src="/image/clockicon.svg" class="clockicon"></img> */}
                      <span className={semostyle.address}>13 May, 2018</span>
                    </div>
                    <div className={semostyle.form_input}>
                      <label className={semostyle.inputlabel}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className={semostyle.formInput}
                        placeholder="Leonard John"
                      ></input>
                    </div>
                    <div className={semostyle.form_input}>
                      <label className={semostyle.inputlabel}>Email</label>
                      <input
                        type="text"
                        name="name"
                        className={semostyle.formInput}
                        placeholder="admin@abc.com"
                      ></input>
                    </div>
                    <button className={semostyle.reg_btn}>Register now</button>
                  </div>
                </AnimationOnScroll>
              </Col>
              {/* </div> */}

              <div className="upcoming_list">
                <h2 className={semostyle.up_heading}>Upcoming Sermons</h2>
              </div>
              {upcomingDate.map((item) => (
                <Col
                  xl={3}
                  lg={3}
                  md={6}
                  sm={6}
                  xs={12}
                  className={eventstyle.event_col}
                >
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className={semostyle.list_cont}>
                      <div className={eventstyle.date_month}>
                        <h5 className={eventstyle.event_date}> 20</h5>
                        <span className={eventstyle.event_month}>JULY</span>
                      </div>
                      <div className={eventstyle.main_cont}>
                        <label className={eventstyle.event_title}>
                          {item.eventtitle}
                        </label>
                        <h5 className={eventstyle.cont_heading}>
                          {item.eventheading}
                        </h5>
                        <p className={eventstyle.event_parag}>
                          {item.eventdescription}
                        </p>
                      </div>
                      <div className={eventstyle.event_time}>
                        <img src="/image/clock.svg" class="clockicon" />
                        <p className={eventstyle.time_parag}>
                          Friday 23:39 IST Saturday 11:20 ISD
                        </p>
                      </div>
                      <div className={eventstyle.event_loaction}>
                        <img src="/image/location.svg" class="locationicon" />
                        <p className={eventstyle.location_parag}>
                          No 233 Main St. New York, United States
                        </p>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};
export default SemonsEvent;
