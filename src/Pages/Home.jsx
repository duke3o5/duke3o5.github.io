import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../Components/Header/header.css";

// import profile from "../Assets/profile.png";
import profile from "../Assets/Projects/profile.png";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              <img
                src={profile}
                alt="home pic"
                class="img-fluid home-img"
                style={{ marginLeft: "-10%" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Deepak Kumar</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Button
        href="Deepak_Kumar_Resume.pdf"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1Jav8zyHoSGl2xC4G1zw7OBXFTNib18V4/view?usp=drivesdk"
          )
        }
        target="_blank"
        className="fork-btn-inner"
        id="resume-button-2"
        download=""
      >
        Hire Me
      </Button>
      <SelfIntro />
    </section>
  );
}

export default Home;
