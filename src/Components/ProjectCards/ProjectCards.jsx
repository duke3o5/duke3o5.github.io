import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai";
import "./projectcards.css"

function ProjectCards({imgPath,title,description,tech,techD,link,a}) {
  return (
    <Card className="project-card-view" id="projects">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title class="project-title">{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} class="project-description project-tech-stack">
          {description}
        </Card.Text>
        <Card.Title class="project-title">{tech}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} class="project-description project-tech-stack">
          {techD}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank" className="project-deployed-link">
          <BiLinkExternal /> &nbsp;
        </Button>
        &nbsp;
        &nbsp;
        <Button variant="primary" href={a} target="_blank" className="project-github-link">
          <AiFillGithub /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;