import React from 'react'
import{ Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Sobre Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contacto</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
          </li>
        
          
        </ul>
        <a className="nav-link mx-3"  href='/login'>Iniciar Sesion</a>
        <a className="nav-link"  href='/register'>Registrarse</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar