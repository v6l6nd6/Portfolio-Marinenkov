import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luxTr from "../../Assets/Projects/Luxtrader.png";
import funirPr from "../../Assets/Projects/Funi.png";
import SocN from "../../Assets/Projects/Soc-Netw.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Мои <strong className="purple">Проекты </strong>
        </h1>
        <p style={{ color: "white" }}>
          Несколько из моих показательных наработок
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxTr}
              isBlog={false}
              title="Luxtrader"
              description="Адаптивная верстка GULP SCSS JS"
              link="https://github.com/v6l6nd6/layout-luxtrader-adaptive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funirPr}
              isBlog={false}
              title="Fun-Proj"
              description="Проект с необычной адаптивной версткой. Присутствует достаточно JS-логики,SCSS,HTML,GULP."
              link="https://github.com/v6l6nd6/my-layout-adaptive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocN}
              isBlog={false}
              title="Social-Network"
              description="Небольшая соц. сеть написанная мною на React. В проектке использованны : React,Redux,Formik,Ts,WS,SCSS."
              link="https://github.com/v6l6nd6/app1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
