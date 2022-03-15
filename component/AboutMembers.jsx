import React ,{useState}from "react";
import { Container, Row, Col,NavLink } from "react-bootstrap";
import teamstyle from "../styles/Member.module.css";
import Teamjson from "../json/member.json";

const AboutMember = () => {
    const[teamData] = useState(Teamjson);

  return (
    <>
      <div className={teamstyle.teammember_section}>
        <Container>
          <div className={teamstyle.member_title}>
            <label className={teamstyle.team_title}>church members</label>
            <h2 className={teamstyle.team_heading}>
              meet our Inspirational team
            </h2>
          </div>
          <Row>
          {teamData.map((item) => (
            <Col xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className={teamstyle.team_content}>
                <img src={item.teamimg} />
                <div className={teamstyle.team_info}>
                  <h5 className={teamstyle.info_heading}>{item.teamname}</h5>
                  <p className={teamstyle.info_parag}>{item.teamtitle}</p>
                  <div className={teamstyle.socail_icon}>
                <NavLink  xl={3} lg={3} md={3} sm={3}  ><img src="/image/facebookicon.svg" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3} ><img src="/image/tweetericon.svg" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3} ><img src="/image/instaicon.svg" /></NavLink>
                </div>
                </div>
              </div>
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default AboutMember;
