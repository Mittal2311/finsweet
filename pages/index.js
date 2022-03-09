import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from "../component/Footer"
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
   <>
   <Header />
   <Footer />
   </>
  )
}
