import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutBanner from "../component/AboutBanner";
import Header from "../component/Header";
import AboutWelcome from "../component/AboutWelcome";
import Benefit from "../component/Benefit";
import AboutMember from "../component/AboutMembers";
import Footer from "../component/Footer"
import Loader from "../component/Loader";

const Aboutus = () =>{
    const [loadingabout,setLoadingAbout] = useState(false);
    const click = (item) => {
        setLoadingAbout(true);
        setTimeout(() => {
            setLoadingAbout(false);
        }, 5000);
    
        setInterval(() => {
          window.location.href = "Semons";
        },1000)
      };
    return(
        <>
    {loadingabout && (
        <div >
       <Loader />
        </div>
      )}
        <Header load={click} />
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