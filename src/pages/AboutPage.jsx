import React from "react";
import "../components/AboutUs/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import carla from "../assets/AboutUs/Carla.jpeg";
import mauro from "../assets/AboutUs/Mauro.jpeg";
import samuel from "../assets/AboutUs/Samuel.jpeg";
import stefan from "../assets/AboutUs/Stefan.jpg";

function AboutPage() {
  return (
    <div className="about-us">
      <h1 className="title-h1">Sobre Nosotros</h1>
      <br />
      <p className="text">
      Bienvenidos a Kimi, donde la pasión por la gastronomía asiática cobra vida. Nuestro equipo está formado por amantes apasionados de la comida que se dedican a ofrecerte una experiencia culinaria auténtica y memorable. Desde nuestros chefs expertos hasta nuestro atento personal de sala, todos compartimos el objetivo de crear platos que cautiven tus sentidos. Utilizamos ingredientes frescos y auténticos para asegurarnos de que cada bocado sea una verdadera delicia. En Kimi, no solo te ofrecemos una comida excepcional, sino también un ambiente acogedor y relajado donde te sentirás como en casa. Esperamos que disfrutes cada momento en Kimi y agradecemos sinceramente que nos hayas elegido para compartir nuestra pasión por la comida asiática contigo.
      </p>
      <br />
      <h2 className="title-h3">El equipo de Kimi</h2>
      <br />
      <div className="py-3">
        <Container>
          <Row className="row m-2 align-items-center">
            <Col>
              <img
                className="mt-3"
                id="carla-alcorta"
                src={carla}
                alt="Imagen de Carla"
              />
              <p id="texto">
                Carla Alcorta <br /> developer jr.{" "}
              </p>
            </Col>
            <Col>
              <img
                className="mt-3"
                id="mauro-juarez"
                src={mauro}
                alt="Imagen de Mauro"
              />
              <p id="texto">
                Mauro Juarez <br /> developer jr.{" "}
              </p>
            </Col>
          </Row>

          <Row className="row m-2">
            <Col>
              <img
                className="mt-3"
                id="samuel-lapetina"
                src={samuel}
                alt="Imagen de Samuel"
              />
              <p id="texto">
                Samuel Lapetina <br /> developer jr.{" "}
              </p>
            </Col>
            <Col>
              <img
                className="mt-3"
                id="stefan-dios"
                src={stefan}
                alt="Imagen de Stefan"
              />
              <p id="texto">
                Stefan Dios <br /> developer jr.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="my-4" style={{ borderTop: "3px solid #BBBBBB" }} />
    </div>
  );
}

export default AboutPage;
