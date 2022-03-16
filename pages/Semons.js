import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Upcoming from "../component/Upcoming";
import AboutBanner from "../component/AboutBanner";
import Header from "../component/Header";
import SemonsEvent from "../component/SemonsEvent";
import Footer from "../component/Footer"


const Semons = () => {
    return(
        <>
            {/* <h1>Semons </h1> */}
            <Header />
            <AboutBanner />
            <Upcoming />
            <SemonsEvent />
            <Footer />

        </>
    )

}
export default Semons;