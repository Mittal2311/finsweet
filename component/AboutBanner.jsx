import react from "react";
import { Container,Row } from "react-bootstrap";
import abannerstyle from '../styles/AboutBanner.module.css'


const AboutBanner = () => {
    return(
        <>
        <div className={abannerstyle.aboutus_banner}>
        <img src="/image/bannerabout.png" className={abannerstyle.about_banner_img} />
        <Container>
        <div className={abannerstyle.about_heading }>
        <label className={abannerstyle.banner_title}>About us</label>
        <h2 className={abannerstyle.banner_heading}>Serving the world around us</h2>
        </div>
        </Container>
        </div>
        </>
    )
}
export default AboutBanner;