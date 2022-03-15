import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import benefitstyle from "../styles/Benefit.module.css";

const Benefit = () => {
  return (
    <>
      <div className={benefitstyle.benefit_section}>
        <Container>
          <div className={benefitstyle.benefit_title}>
            <label className={benefitstyle.benefit}>BENEFITS </label>
            <h2 className={benefitstyle.benefit_heading}>
              THE benefits of joining our church
            </h2>
          </div>
          <Row>
            <Col xl={6} lg={6} className={benefitstyle.left_right_content}>
              <div className={benefitstyle.bebefent_content}>
                <h4 className={benefitstyle.content_heading }>find fulfillment and joy</h4>
                <p className={benefitstyle.content_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
            </Col>
            <Col xl={6}  className={benefitstyle.left_right_content}>
                <img src="/image/rightimg1.svg" className={benefitstyle.benefitimg}/>
            </Col>
                    {/* second section */}

            <Col xl={6}  className={benefitstyle.left_right_content}>
                <img src="/image/leftimg1.svg" className={benefitstyle.benefitimg}/>
            </Col>
            <Col xl={6} lg={6} className={benefitstyle.left_right_content}>
              <div className={benefitstyle.bebefent_content}>
                <h4 className={benefitstyle.content_heading }>find fulfillment and joy</h4>
                <p className={benefitstyle.content_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Benefit;
