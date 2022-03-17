
import React from "react";
import { Container, Row, Col,Image} from "react-bootstrap";
import poststyle from "../styles/RecentPost.module.css";

const RecentPost = () => {
  return (
    <>
      <div className={poststyle.recent_post_section}>
        <Container>
          {/* <h1> Blog post</h1> */}
          <div className={poststyle.post_main}>
            <label className={poststyle.post_title}>OUR BLOG</label>
            <h2 className={poststyle.post_heading}>most recent post</h2>
          </div>
          <Row>
            <div className={poststyle.main_post}>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <Image src="/image/post.svg" className={poststyle.postimg}/>
              </Col>
              <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className={poststyle.post_info}>
                  <div className={poststyle.date_author}>
                    <label className={poststyle.date}>Tuesday 13 May, 2022</label>
                    <label className={poststyle.author}>By John Hunau Deo</label>
                  </div>
                  <h4 className={poststyle.post_info_heading}>
                    Church was doing what he often did when dropped An oracle{" "}
                  </h4>
                  <p className={poststyle.post_info_parag}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                  <button className={poststyle.readmorebtn}>Read more</button>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default RecentPost;
