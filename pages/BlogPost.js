import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Compassion from "../component/Compassion";


const BlogPost = () => {
    return(
        <>
        <div>
            {/* <h1>Blogpost page </h1> */}
            <Header />
            <Compassion />
            <Footer />
        </div>
        </>
    )

}
export default BlogPost;