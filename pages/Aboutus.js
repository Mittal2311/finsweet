import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutBanner from "../component/AboutBanner";
import Header from "../component/Header";
import AboutWelcome from "../component/AboutWelcome";
import Benefit from "../component/Benefit";
import AboutMember from "../component/AboutMembers";
import Footer from "../component/Footer"

const Aboutus = () =>{
    return(
        <>
        <Header />
        {/* <h1>About us Page</h1> */}
        <AboutBanner />  
        <AboutWelcome />      
        <Benefit />
        <AboutMember />
        <Footer />
        </>
    )
}
export default Aboutus;