import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Вкратце </span>
            </h1>
            <p className="home-about-body">
              С давних пор люблю программирование за вечную и необъятную возможность учиться и поддерживать свою жизнь в сознательном состоянии.
              Большего всего ,конечно считаю, должны нравиться постоянные неполадки. Кажется, лишь они заставляют расти или поддерживать в форме.
              <br />
               <br />
               <br />
              Мой стек
              <br />
              <i>
                <b className="purple">
                JavaScript
                  /HTML5
                  /CSS3
                  /Sass
                  /React JS
                  /Redux
                  /React-Redux
                  /Websocket
                  /Context API
                  /Typescript
                  /Git
                  /Webpack</b>
              </i>
              <br />
              <br />
               <br />
              Стараюсь угнаться за новыми технологиями, постоянно пребывая в страхе, что актуальный стек уже стар 
              и необходимо снова открывать источники информации. &nbsp;
              <br />
              <br />
              На данный момент дерзаю Docker,пытаюсь глядеть одним глазом на Angular и радоваться коду.        
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Попробуйте найти меня</h1>
            <p>
              Всегда рад  <span className="purple">вашим ответам </span> мне
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/v6l6nd6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yura-marinenkov-87480422b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_marinenkov/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
