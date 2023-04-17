import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section about-section container-fluid"  id="about" style={{backgroundColor:"#A2B38B"}} >
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋 I'm <span  id="user-detail-name" style={{color: "#0A81AB" , fontStyle:"italic"}}>Deepak Kumar</span> an aspiring and determined <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span id="user-detail-intro" style={{color: "#0A81AB" , fontStyle:"italic"}}>HTML, CSS, JavaScript, React.Js, Redux, Node.JS</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.
              <br/>
              <br/>
              I developed passion for coding a few years back when I printed my first <span style={{color: "#0A81AB" , fontStyle:"italic"}}> "Hello world"</span> 😃, that hello world just hits different 😌 . Since then aesthetically functional websites has just been my thing.
              
            </p>
            
          </Col>
        
        </Row>
        <Row>
        
        </Row>
       
      </Container>
      
    </Container>
  );
}
export default SelfIntro;


{/* <Button
                href="Deepak_Kumar_Resume.pdf"
                onClick={()=>window.open("https://drive.google.com/file/d/1Jav8zyHoSGl2xC4G1zw7OBXFTNib18V4/view?usp=drivesdk")}
                target="_blank"
                className="fork-btn-inner nav-link resume"
                id="resume-button-1"
                download=""
              >
                Hire Me
              </Button> */}