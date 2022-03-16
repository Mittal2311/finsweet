import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import benefitstyle from "../styles/Benefit.module.css";
import Benefitjson from "../json/benefit.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Benefit = () => {
  const [benefitdata] = useState(Benefitjson);
  return (
    <>
      <Container>
        <div
          className={benefitstyle.benefit_section}
          
        >
          <div className={benefitstyle.benefit_title}>
            <label className={benefitstyle.benefit}>BENEFITS </label>
            <h2 className={benefitstyle.benefit_heading}>
              THE benefits of joining our church
            </h2>
          </div>
          {/* <Container className={benefitstyle.benifitContainer}> */}
          <Row className={benefitstyle.benifitContainer}>
            {benefitdata.map((i, k) => {
              if (k % 2 == 0) {
                return (
                  <>
                 
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={benefitstyle.left_right_content}
                    >
                     <AnimationOnScroll animateIn="animate__fadeInDown"> 
                      {/* <div className={benefitstyle.benefit_content}> */}
                        <h4 className={benefitstyle.content_heading}>
                          {i.benefitheading}
                        </h4>
                        <p className={benefitstyle.content_parg}>
                          {i.benefitdescription}
                        </p>
                      {/* </div> */}
                      </AnimationOnScroll>
                    </Col>
                   
                    <Col
                     xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={benefitstyle.left_right_content}
                    >
                    <AnimationOnScroll animateIn="animate__fadeInUp">  
                      <img
                        src={i.benefitimg}
                        className={benefitstyle.benefitimg}
                      />
                       </AnimationOnScroll>
                    </Col>
                  </>
                );
              } else if (k % 2 == 1) {
                return (
                  <>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={benefitstyle.left_right_content}
                    >
                      {/* <AnimationOnScroll animateIn="animate__fadeInDown">  */}
                      <img
                        src={i.benefitimg}
                        className={benefitstyle.benefitimg}
                      />
                       {/* </AnimationOnScroll> */}
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={benefitstyle.left_right_content}
                    >
                     {/* <AnimationOnScroll animateIn="animate__fadeInUp">  */}
                      <div className={benefitstyle.bebefent_content}>
                        <h4 className={benefitstyle.content_heading}>
                          {i.benefitheading}
                        </h4>
                        <p className={benefitstyle.content_parg}>
                          {i.benefitdescription}
                        </p>
                      </div>
                      {/* </AnimationOnScroll> */}
                    </Col>
                  </>
                );
              }
            })}
          </Row>
          {/* </Container> */}
        </div>
      </Container>
    </>
  );
};
export default Benefit;
