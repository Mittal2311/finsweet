import React,{useState} from "react";
import { Container ,Row,Col,Image } from "react-bootstrap";
import watchstyle from "../styles/Watchlist.module.css";
import watchjson from "../json/watchlist.json";


const Watchlist = () =>{
    const[watchData] = useState(watchjson);
    return(
        <>
        <div className={watchstyle.watchitem_section}>
        <Container>
                <div className={watchstyle.list_heading}>
                <label className={watchstyle.list_title }>Watch and listen</label>
                <h2 className={watchstyle.ourlist_heading }>THE benefits of joining our church</h2>
                </div>
            <Row>
            {watchData.map((item) => (
                <Col xl={3} lg={3} md={6}  sm={6} xs={12} className={watchstyle.watch_col}>
                    <Image  src={item.watchlistimg} className={watchstyle.watchimg}/>
                    <div className={watchstyle.our_heading}>
                    <h5 className={watchstyle.watch_heading}>{item.watchlistheading}</h5>
                    </div>
                </Col>
            ))}
            </Row>
        </Container>
        </div>
        </>
    )

}
export default Watchlist;