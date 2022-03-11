import React,{useState} from "react";
import { Container ,Row,Col} from "react-bootstrap";
import relevstyle from "../styles/Relevent.module.css";
import Releventjson from "../json/relevent.json";

const Relevent = () => {
    const [relData] = useState(Releventjson);
    return(
        <>
       <div className={relevstyle.relevent_section }>
       <Container>
       <div className={relevstyle.relevent_main_heading}>
       <label className={relevstyle.subheding }>sub-headline</label>
       <h2 className={relevstyle.heading}>a church that's relevant</h2>
       </div>
           <Row>
           {relData.map((item) => (
               <Col xl={4} lg={4} md={4}>
               <div className={relevstyle.relevent_cont }>
                <img src={item.releventicon} />
                <div className={relevstyle.about_parg}>
                <h4 className={relevstyle.relev_title }> {item.releventheading}</h4>
                <p className={relevstyle.rel_parg }> {item.releventdescr}</p>
                </div>
               </div>
               </Col>
                ))}
           </Row>
       </Container>

       </div>
        </>
    )

}
export default Relevent;