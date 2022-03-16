import { even } from "prelude-ls";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import eventstyle from "../styles/Event.module.css";
import Eventjson from "../json/event.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const SemonsEvent = () => {
  const [eventDate] = useState(Eventjson);
  return (
    <>
      {/* <h1>Event</h1> */}
      <div className={eventstyle.event_section}>
        <Container>
        <AnimationOnScroll animateIn="animate__bounceIn"> 
          <h2 className={eventstyle.event_heading}>View All Events</h2>
          </AnimationOnScroll>
          <Row>
            {eventDate.map((item) => (
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={eventstyle.event_col}
              >
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  <div className={eventstyle.event_cont}>
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
        </Container>
      </div>
    </>
  );
};
export default SemonsEvent;
