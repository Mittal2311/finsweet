import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";



const Categor = (props) => {
    // const  clickme = () => {
    //     console.log("item 1 click");
    // }
 
    return(
        <>
        <div className="categori_section">
        <Container>
            <Row>
            <div className="categ_cont"> 
            <Col xl={6} className="item1">
                <button onClick={props.load}> Item1</button>
            </Col>
                <Col xl={6} className="item2">
                <button onClick={props.load} >item2</button>
                </Col>
            </div>
            </Row>
        </Container>

        </div>
        </>
    )

}
export default Categor;