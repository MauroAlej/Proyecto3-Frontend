import React from 'react'
import '../components/AboutUs/About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carla from '../assets/AboutUs/Carla.jpeg';
import mauro from '../assets/AboutUs/Mauro.jpeg';
import samuel from '../assets/AboutUs/Samuel.png';
import stefan from '../assets/AboutUs/Stefan.jpg';



function AboutPage() {
  return (
      <div className="about-us">
      <h1 className="title-h1">Sobre Nosotros</h1>
      <br />
      <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit perferendis adipisci eligendi dolores nam quibusdam, inventore corrupti, quo deleniti eos placeat libero molestiae, aspernatur dicta modi delectus mollitia aliquam.
      </p>
      <br />
      <h3 className="title-h3">El equipo de Wasabi Deli</h3>
      <br />
      <div className="py-3"> 
      <Container>
      <Row className="row m-2">
          <Col>
          <img className="mt-3" id="carla-alcorta" src={carla} alt="Imagen de Carla" />
          <p id="texto">Carla Alcorta <br /> developer jr. </p>
          </Col>
          <Col>
          <img className="mt-3" id="mauro-juarez" src={mauro} alt="Imagen de Mauro" />
          <p id="texto">Mauro Juarez <br /> developer jr. </p>
          </Col>
      </Row>

      <Row className="row m-2">
          <Col >
          <img className="mt-3" id="samuel-lapetina" src={samuel} alt="Imagen de Samuel" />
          <p id="texto">Samuel Lapetina <br/> developer jr. </p>
          </Col>
          <Col>
          <img className="mt-3" id="stefan-dios" src={stefan} alt="Imagen de Stefan" />
          <p id="texto">Stefan Dios <br /> developer jr. </p>
          </Col>
      </Row>
      </Container>
      </div>
      <hr className="my-4" style={{borderTop:'3px solid #BBBBBB'}}/>
      </div>
  );
  }
  
  export default AboutPage;
