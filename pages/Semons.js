import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Upcoming from "../component/Upcoming";
import AboutBanner from "../component/AboutBanner";
import Header from "../component/Header";
import SemonsEvent from "../component/SemonsEvent";
import Footer from "../component/Footer";
import Loader from "../component/Loader";


const Semons = () => {
    const [loadingsemons,setLoadingSemons] = useState(false);
    const click = (item) => {
        setLoadingSemons(true);
        setTimeout(() => {
            setLoadingSemons(false);
        }, 5000);
    
        setInterval(() => {
          window.location.href = "Blog";
        },1000)
      };
    return(
        <>
        {loadingsemons && (
        <div >
       <Loader />
        </div>
      )}
            {/* <h1>Semons </h1> */}
            <Header load={click} />
            <AboutBanner />
            <Upcoming />
            <SemonsEvent />
            <Footer />

        </>
    )

}
export default Semons;