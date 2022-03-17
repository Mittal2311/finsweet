import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import RecentPost from "../component/RecentPost";
import AllBlogPost from "../component/AllBlogPost";


const Blog = () => {
    return(
        <>
        <div className="blog_section" style={{backgroundColor:"#E5E5E5"}}>
        <Header />
        <RecentPost />
        <AllBlogPost />
        <Footer />
        </div>
        </>
    )

}
export default Blog;