import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Col, NavLink } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import contactstyle from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact_page" style={{ backgroundColor: "#F5F2F0" }}>
        <div className={contactstyle.contact_banner}>
          <Image
            src="/image/contactbanner.png"
            className={contactstyle.contact_bannerimg}
          />
        </div>
        {/* <div className={contactstyle.contact_banner_text}>
        <label className="banner_title">Contact</label>
        <h2 className="banner_heading">Get in touch with our CHURCH</h2>
        </div> */}
        <Container>
          <Row>
            <div className={contactstyle.contact_info}>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className={contactstyle.contact_form}>
                  <h5 className={contactstyle.contact_heading}>
                    Contact form:
                  </h5>
                  <input
                    type="text"
                    name="name"
                    className={contactstyle.formInput}
                    placeholder="Your full Name"
                  />
                  <input
                    type="text"
                    name="name"
                    className={contactstyle.formInput}
                    placeholder="Your Email"
                  />
                  <input
                    type="text"
                    name="name"
                    className={contactstyle.formInput}
                    placeholder="Query Related"
                  />
                  <textarea
                    rows="5"
                    name="message"
                    className={contactstyle.textarea}
                    placeholder="Massage"
                    spellcheck="false"
                  ></textarea>
                  <button className={contactstyle.send_btn}>
                    Send Message{" "}
                  </button>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                  <div className={contactstyle.contact_address_part}>
                    <div className={contactstyle.contact_address}>
                      <label className={contactstyle.add_title}>Address</label>
                      <h5 className={contactstyle.address}>
                        NH 234 Public Square <br /> San Francisco 65368
                      </h5>
                    </div>
                    <div className="contact_detail">
                      <label className={contactstyle.detail_title}>
                        Contact Details
                      </label>
                      <h5 className={contactstyle.contact_number}>
                        (480) 555-0103
                      </h5>
                      <p className={contactstyle.contact_parg}>
                        finsweet@example.com
                      </p>
                    </div>
                    <div className="contact_social">
                      <label className={contactstyle.add_title}>
                        Find us here
                      </label>
                      <div className={contactstyle.social_icon}>
                        <NavLink xl={3} lg={3} md={3} sm={3}>
                          <img src="/image/facebookicon.svg" />
                        </NavLink>
                        <NavLink xl={3} lg={3} md={3} sm={3}>
                          <img src="/image/tweetericon.svg" />
                        </NavLink>
                        <NavLink xl={3} lg={3} md={3} sm={3}>
                          <img src="/image/instaicon.svg" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
            
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
