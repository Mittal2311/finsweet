import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Col, Row } from "react-bootstrap";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Post from "../component/Post";
import comstyle from "../styles/Compassion.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const BlogPost = () => {
  return (
    <>
      <div className="blogpost" style={{ backgroundColor: "#F5F2F0" }}>
        <Header />
        <div className={comstyle.compassion_section}>
          <Container>
          <AnimationOnScroll animateIn="animate__bounceIn"> 
            <div className="main_heading text-center">
              <label className={comstyle.blogpost_title}>Relationship</label>
              <h2 className={comstyle.blogpost_heading}>
                HOW TO SHOW COMPASSION
              </h2>
              <span className={comstyle.blogpost_date}>13 May, 2018</span>
              <span className={comstyle.blogpost_author}>
                By Mathew Johnson
              </span>
            </div>
            </AnimationOnScroll>
            <Col xl={12} lg={12} md={12}>
            <AnimationOnScroll animateIn="animate__fadeInUp"> 
              <Image
                src="/image/mainimg.svg"
                className={comstyle.blogpost_img}
              />
               </AnimationOnScroll>
            </Col>
            <div className={comstyle.post_body}>
              <div className={comstyle.body_cont}>
              <AnimationOnScroll animateIn="animate__bounceIn"> 
                <h2 className={comstyle.postbody_heading}>
                  LOREM IPSUM DOLOR SIT AMET
                </h2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                <p className={comstyle.postbody_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Non tellus orci ac auctor
                  augue mauris augue neque gravida.
                </p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInRight"> 
                <p className={comstyle.postbody_parg}>
                  Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi
                  porta lorem mollis aliquam. Quis vel eros donec ac odio tempor
                  orci dapibus ultrices. Elementum eu facilisis sed odio morbi.
                  Nam at lectus urna duis convallis convallis tellus id. Feugiat
                  pretium nibh ipsum consequat nisl vel. Elementum pulvinar
                  etiam non quam lacus. Sit amet porttitor eget.
                </p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInDown"> 
                <Image src="/image/postimg.svg" className={comstyle.bodyimg} />
                </AnimationOnScroll>
                <div className={comstyle.body_cont1}>
                <AnimationOnScroll animateIn="animate__fadeInRight"> 
                  <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                  <p className={comstyle.postbody_parg}>
                    Aenean vel elit scelerisque mauris. Imperdiet sed euismod
                    nisi porta lorem mollis aliquam. Quis vel eros donec ac odio
                    tempor orci dapibus ultrices. Elementum eu facilisis sed
                    odio morbi. Nam at lectus urna duis convallis convallis
                    tellus id. Feugiat pretium nibh ipsum consequat nisl vel.
                    Elementum pulvinar etiam non quam lacus. Sit amet porttitor
                    eget.
                  </p>
                  <div className={comstyle.qoute}>
                    <p className={comstyle.qoute_parg}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Dui faucibus in ornare quam viverra orci sagittis
                      eu volutpat.
                    </p>
                  </div>
                  <p className={comstyle.postbody_parg}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Non tellus orci
                    ac auctor augue mauris augue neque gravida.
                  </p>
                  </AnimationOnScroll>
                </div>
                <div className={comstyle.body_cont2}>
                <h2 className={comstyle.h4_heading}>
                  LOREM IPSUM DOLOR SIT AMET CONSECTETUR
                </h2>
                <AnimationOnScroll animateIn="animate__fadeInUp"> 
                <p>
                  We both celebrate and challenge the culture around us as we
                  orient our lives around Jesus. We want to serve the world
                  around us. It’s why we support mission work all across the
                  globe Regardless of what your next step in faith is, we want
                  to help you take that next step Our church is10% of our annual
                  income to
                </p>
                <div className={comstyle.bulletpoints}>
                  <p className={comstyle.bulletpoint_parg}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p className={comstyle.bulletpoint_parg}>
                    Purus sit amet luctus venenatis lectus magna
                  </p>
                  <p className={comstyle.bulletpoint_parg}>
                    Aenean vel elit scelerisque mauris. Imperdiet sed euismod
                  </p>
                </div>
                <p className={comstyle.postbody_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Non tellus orci ac auctor
                  augue mauris augue neque gravida.
                </p>
                <p className={comstyle.postbody_parg}>
                  Saepe magni aut maxime vel voluptatem. Ab eveniet neque
                  placeat qui porro ab minus voluptas. Dicta praesentium neque
                  vero mollitia aperiam sed enim. Lacinia quis vel eros donec ac
                  odio.
                </p>
                </AnimationOnScroll>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default BlogPost;
