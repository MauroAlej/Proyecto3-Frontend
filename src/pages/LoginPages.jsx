import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Swal from 'sweetalert2';

const LoginPages = () => {
  const [formInput, setFormInput] = useState({
    user: "",
    pass: "", 
   
  });
  const [userInput, setUserInput] = useState(false);
  const [passInput, setPassInput] = useState(false);
  
  const [roleInput, setRoleInput] = useState(false);
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleChange = (ev) => {
    setFormInput({ ...formInput, [ev.target.name]: ev.target.value });
    if (formInput.user) {
      setUserInput(false);
    }
    if (formInput.pass) {
      setPassInput(false);
    }
  
   
  }
  ;

  const handleClick = async (ev) => {
    ev.preventDefault(); /* para que no me recargue la pagina */
    if (formInput.user && formInput.pass) {
      const res = await fetch("http://localhost:2020/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: formInput.user,
          contrasenia: formInput.pass
        })
      });
      
      const data = await res.json();
      
      if (res.status === 200) { 
        localStorage.setItem("token", JSON.stringify(data.userUptade.token));
        localStorage.setItem("role", JSON.stringify(data.userUptade.role));
        localStorage.setItem("idUser", JSON.stringify(data.userUptade._id));
        
        if (data.userUptade.role === "admin") {
          navigate("/admin"); 
        } else if (data.userUptade.role === "user") {
          navigate("/"); 
        }
      } else {
        Swal.fire({
          title: 'usuario no registrado',
        
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        ;
      }
    } else {
      setUserInput(true);
      setPassInput(true);
      setRoleInput(true);
    }
  };

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  return (
    <>
    <style>
    {`
          body {
            background-image: url("../public/china.avif"); /* Reemplaza 'ruta-de-la-imagen.jpg' con la ruta de tu imagen */
            background-size: cover; /* Ajusta el tamaño de la imagen para cubrir todo el fondo */
            background-repeat: no-repeat; /* Evita la repetición de la imagen */
            background-attachment: fixed; /* Fija la imagen para que no se desplace con el contenido */
            /* Agrega cualquier otra propiedad CSS que desees */
            
          }
         
        `}
    </style>
      <div className='d-flex justify-content-center mt-5 '>
        <form className="class-login">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">usuario</label>
            <input type="email" className={userInput ? "form-control is-invalid" : "form-control"} name='user' onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">contraseña</label>
            <input type="password" className={passInput ? "form-control is-invalid" : "form-control"} name="pass" onChange={handleChange} id="exampleInputPassword1" />
          </div>
         
          
          <button type="submit" className="btn btn-primary" onClick={handleClick}>iniciar sesión</button>
          <a className='ms-3 text-primary ' href='/404'>recuperar contraseña</a>
        </form>
      </div>
      <div className='container d-flex justify-content-center'>
      <div className='mt-5'>
      <a href="/404" className='button-like-link'>
    Continuar con Gmail<img src="/public/Gmail_29991.ico" alt="" className='gmil-a ms-1' />
  </a>
</div>
        <div className='mt-5 ms-5'>
        <a href="/404" className='para-face button-link'>
    
      Continuar con Facebook <img src="/public/facebook.png" alt="" className='gmil-a ms-1' />
    
  </a>
        </div>
      </div>
    </>
  );
};

export default LoginPages;