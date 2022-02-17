import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";


function Resume() {


  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Опыт WEB DEV</h3>
            <Resumecontent
              title="Frontend Developer"
              date="Июнь 2021 - Декабрь 2021"
              content={[
                "Верстка небольших проектов,лендингов,интернет-магазинов",
                "Адаптивность/кроссбраузерность/оптимизированность",
                "HTML/Sass/CSS/БЭМ/JavaScript",
                "Git/Gulp/Webpaсk"
              ]}
            />
            <h3 className="resume-title">Другой опыт</h3>
            <Resumecontent
              title="Помощник руководителя отдела по набору и обучению персонала"
              date="Сентябрь 2019 — июнь 2020"
              content={[
                "Майами, США (Флорида)",
                "Предрейсовая подготовка судоводительского состава",
                "Техническая учеба и морская подготовка экипажа",
                "Тренировка вахтенных помощников капитана"
              ]}
            />
            <Resumecontent
              title="Преподаватель немецкого языка"
              date="Декабрь 2017 — апрель 2019"
              content={[
                "Йена, Германия (Тюрингия)",
                "Формирование и закрепление основных навыков говорения, чтения, письма и слушания.",
                "Составлении учебно-методического пособия к изучению курса по иностранному языку."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Образование</h3>

            <Resumecontent
              title="Йенский университет имени Фридриха Шиллера"
              date="Май 2019"
              content={[
                "Deutsch als Fremd- und Zweitsprache"
              ]}

            />
            <h3 className="resume-title">Навыки</h3>
            <Resumecontent
              content={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "React JS",
                "Redux",
                "React-Redux",
                "Websocket",
                "Context API",
                "Typescript",
                "Git",
                "Webpack",
                "Gulp"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
