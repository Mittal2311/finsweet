import React ,{useEffect, useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from "../component/Footer"
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from '../component/Banner'
import Relevent from '../component/Relevent'
import Slidebar from '../component/Sidebar'
import Welcome from "../component/Welcome";
import Watchlist from "../component/Watchlist";
import Upcoming from "../component/Upcoming";
import Cta from "../component/Cta";
 import Blogpost from "../component/Blogpost";
import Loader from "../component/Loader";

export default function Home() {
  const [loading,setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const click = (item) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    setInterval(() => {
      window.location.href = "Aboutus";
    },1000)
  };
  
  // useEffect(()=>{
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 5000);
  // } ,[])
  return (
   <>
      {loading && (
        <div
          // style={{
          //   zIndex: 999999999999,
          //   position: "absolute",
          //   height: "100vh",
          //   width: "100%",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
       <Loader />
        </div>
      )}
   <Header obj={{show:show,setShow:setShow}} load={click} />
   {/* <Slidebar obj={{show:show,setShow:setShow}}/> */}
   <Banner />
   <Relevent />
   <Welcome />
   <Watchlist />
   <Upcoming />
   <Cta />
   <Blogpost />
   <Footer />
   {/* <Loader /> */}

   </>
  )
}
