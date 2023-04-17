import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
  DiCss3,
  
} from "react-icons/di";
import {SiRedux,SiExpress,SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (<div id="skills" >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="pur">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
    <Col xs={4} md={2} className="tech-icons skills-card">
        <DiReact  class="skills-card-img"/>
        <p class="skills-card-name">React</p>
      </Col>
    <Col xs={4} md={2} className="tech-icons skills-card">
        <SiRedux class="skills-card-img"/>
        <p class="skills-card-name">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skills-card">
        <SiExpress class="skills-card-img"/>
        <p class="skills-card-name">Express</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiMongodb class="skills-card-img"/>
        <p class="skills-card-name">MongoDB</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiNodejs class="skills-card-img"/>
        <p class="skills-card-name">NodeJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiJavascript1 class="skills-card-img"/>
        <p class="skills-card-name">JavaScript</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwind</p>
      </Col> */}
      
      
      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiHtml5 class="skills-card-img"/>
        <p class="skills-card-name">HTML</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiGithubBadge class="skills-card-img"/>
        <p class="skills-card-name">Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skills-card">
        <DiCss3 class="skills-card-img"/>
        <p class="skills-card-name">CSS</p>
      </Col>
    </Row>
    </div>
  );
}

export default Techstack;