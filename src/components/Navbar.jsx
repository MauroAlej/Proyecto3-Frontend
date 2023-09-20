import React, { useEffect } from 'react'
import { NavLink, Link, useNavigate,  } from 'react-router-dom'

const Navbar = () => {
const navigate = useNavigate()

const token = JSON.parse(localStorage.getItem("token"))|| ""

const role = JSON.parse(localStorage.getItem("role"))|| ""


const handleClick = ()=>{
localStorage.removeItem("token")
localStorage.removeItem("role")
useEffect(() => {
 navigate("/")
  }
, 1000)

}


  return (
   <>
  <nav className="navbar navbar-expand-lg class-navar">
  <div className="container-fluid">
    <Link className="navbar-brand" to={role === 'admin' ? '/admin' : role === 'user' ? '/user' : '/'}>
      <img src="../public/logonombre.png" alt="Logo" width={"30px"} />
    </Link>
    <button className="navbar-toggler button-hambur" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon class-hola"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* Elementos principales de navegación */}
        {
          token && role === 'admin'
            ?
            (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/adminUser">Ver Usuarios</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/createProd">Crear Producto</NavLink>
                </li>
              </>
            )
            :
            <>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">Sobre Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/cartUser">Carrito</NavLink>
              </li>
            </>
        }
      </ul>

      {/* Elementos para iniciar/cerrar sesión */}
      <ul className="navbar-nav ms-auto">
        {
          token && role === 'admin' || token && role === 'user'
            ?
            <li className="nav-item">
              <NavLink className="nav-link text-white"  to="/" onClick={handleClick}>Cerrar Sesión</NavLink>
            </li>
            :
            <>
              <div className='d-flex'>
                <NavLink className="nav-link  me-3 text-white" to="/login">Iniciar Sesión</NavLink>
                <NavLink className="nav-link text-white" to="/register">Registrarse</NavLink>
              </div>
              
            </>
        }
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}


export default Navbar