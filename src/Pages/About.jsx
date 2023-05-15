import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../Components/TechStack/TechStack";
import ToolStack from "../Components/ToolStack/ToolStack";
import SelfIntro from "../Components/SelfIntro/SelfIntro";

function About() {
  return (
    <Container fluid className="nav-link about" >
      <SelfIntro />
      <Container>
        {/* <Techstack /> */}
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;
