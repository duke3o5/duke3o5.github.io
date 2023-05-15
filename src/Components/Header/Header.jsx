import React, { useState } from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";

function Header() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const x = window.matchMedia("(max-width:1000px)");

  function rel(x) {
    if (x.matches) {
      // If media query matches
      let a = document.getElementById("tgl");
      a.click();
    }
  }

  return (
    <Navbar fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Toggle id="tgl" aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home" id="nav-menu">
            <Nav.Item className="fork-btn">
              <Link to="home">
                <Button
                  onClick={() => {
                    rel(x);
                  }}
                  target="_blank"
                  className="fork-btn-inner nav-link home"
                >
                  Home
                </Button>
              </Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
          <Link to="about">
          <Button onClick={()=>{rel(x)}} 
                target="_blank"
                id="about"
                className="fork-btn-inner nav-link about about section"
              >
                About
          </Button>
          </Link>
          </Nav.Item>

            <Nav.Item className="fork-btn">
              <Link to="skills">
                <Button
                  onClick={() => {
                    rel(x);
                  }}
                  target="_blank"
                  className="fork-btn-inner nav-link skills"
                >
                  Skills
                </Button>
              </Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Link to="projects">
                <Button
                  onClick={() => {
                    rel(x);
                  }}
                  target="_blank"
                  className="fork-btn-inner nav-link projects"
                >
                  Projects
                </Button>
              </Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Link to="contact">
                <Button
                  onClick={rel}
                  target="_blank"
                  className="fork-btn-inner nav-link contact"
                >
                  Contact
                </Button>
              </Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1Jav8zyHoSGl2xC4G1zw7OBXFTNib18V4/view?usp=drivesdk"
                  )
                }
                className="fork-btn-inner nav-link resume"
                id="resume-link-1"
              >
                <a
                  href="Deepak_Kumar_Resume.pdf"
                  id="resume-button-1"
                  download="Deepak_Kumar_Resume.pdf"
                  target="_blank"
                  style={{ textDecoration: 'none', color: "white" }}
                >
                  Resume
                </a>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
