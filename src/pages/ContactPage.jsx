import React from 'react';
import '../components/Styles/ContactPage.css';
import shanghai from '../assets/Contact/shanghai.png';

function ContactPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h2>Tu opinión nos interesa</h2>
          <p>Te agradecemos que dediques un momento a completar este formulario para encontrar formas de seguir mejorando.</p>
        <h3>Ubicación del restaurante:</h3>
        <img className='img-fluid' width="400" height="auto" src={shanghai} alt="Imagen de un mapa en Shanghai" />
        </div>
        <div className="col-md-6">
          <h2>Contactanos</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" className="form-control" id="telefono" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;