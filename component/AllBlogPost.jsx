import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import allblogstyle from "../styles/AllBlogPost.module.css";
import AllBlogjson from "../json/allblogpost.json";

const AllBlogPost = () => {
    const [allblogpostData] = useState(AllBlogjson);
  return (
    <>
      <div className={allblogstyle.all_blog_post_section}>
        <Container>
          <h2 className={allblogstyle.all_post_heading}>ALL BLOG POSTS</h2>
          <Row>
          {allblogpostData.map((item) => (
            <Col xl={3} lg={4} md={4} sm={6} xs={12}>
              <div className={allblogstyle.post_content}>
                <label className={allblogstyle.blogpost_title }>{item.blogposttitle}</label>
                <h5 className={allblogstyle.blogpost_heading}>
                  {item.blogpostheading}
                </h5>
                <p className={allblogstyle.blogpost_parag}>
                 {item.blogpostdescription}
                </p>
                <div className={allblogstyle.post_author_date }>
                  <span className={allblogstyle.allpost_author  }>{item.blogpostauthor}</span>
                  <span className={allblogstyle.allpost_date}>{item.blogpostdate}</span>
                </div>
              </div>
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default AllBlogPost;
