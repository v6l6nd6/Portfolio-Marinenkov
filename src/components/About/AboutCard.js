import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Я Front-end (React)| разработчик
            из <span className="purple">России</span>
            <br />
            <br />
            Вечный студент!!!
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Изучаю программирование
            </li>
            <li className="about-activity">
              <ImPointRight /> Совершенствую свои знания в 3-х языках
            </li>
            <li className="about-activity">
              <ImPointRight /> Пишу свои методические пособия в области DAF(Deutsch als Fremdsprache)
            </li>
            <li className="about-activity">
              <ImPointRight /> К 2025 г. планирую побывать в 40 странах (осталось 12).
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Стремлюсь издавать то, что меняет жизни людей!"{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
