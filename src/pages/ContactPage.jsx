import React from 'react';
import ContactForm from '../components/ContactForm';
import '../components/Styles/ContactPage.css';
import shanghai from '../assets/Contact/shanghai.png';

function ContactPage() {
  return (
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6">
          <h2 id='color-title'>Tu opinión nos interesa</h2>
          <p>Te agradecemos que dediques un momento a completar este formulario para encontrar formas de seguir mejorando.</p>
          <h3 id='color-title'>Ubicación del restaurante:</h3>
          <img className='img-fluid' width="400" height="auto" src={shanghai} alt="Imagen de un mapa en Shanghai" />
        </div>
          <div className="col-md-6">
            <h2 id='color-title'>Contactanos</h2>
            <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;