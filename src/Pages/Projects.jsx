import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import p1 from "../Assets/Projects/the_service.png";
import p2 from "../Assets/Projects/meanBuy.png";
import p3 from "../Assets/Projects/bigbasket.png";
import p4 from "../Assets/Projects/apple.png";

function Projects() {
  return (
    <Container
      id="projects"
      fluid
      className="project-section"
      style={{ backgroundColor: "#A2B38B" }}
    >
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p3}
              title="Big Basket Clone"
              description="Clone of Bigbasket.com. bigbasket.com is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats."
              tech="Tech-Stacks"
              techD=" HTML | CSS | JavaScript | React | Redux"
              link="https://apnabasket-anubhav0391.vercel.app/"
              a="https://github.com/duke3o5/-humane-north-3042"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p1}
              title="The Uraban Company clone"
              description="Urban Company is a technology platform offering a variety of services at home.
              Customers use our platform to book services such as beauty treatments,
              haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair,
              painting etc. These services are delivered in the comfort of their home and at a
              time of their choosing."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React.JS | Redux | Chakra UI"
              link="https://theservices-duke3o5.vercel.app/"
              a="https://github.com/duke3o5/loyal-elbow-6166"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p2}
              title="Meanbuy clone"
              description="Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store."
              tech="Tech-Stacks"
              techD="Html | Javascript | CSS | Boostrap  "
              link="https://fascinating-starlight-f562ee.netlify.app/"
              a="https://github.com/duke3o5/loyal-elbow-6166"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={p4}
              title="Apple clone"
              description="Apple is leading tech giant that sells smartphones, ipad, mackbook, airpods, watches."
              tech="Tech-Stacks"
              techD="Html | Javascript | CSS | Boostrap  "
              link="https://matrix-opal.vercel.app/"
              a="https://github.com/Sagarbisht07/Perpetual-fact-6008"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
