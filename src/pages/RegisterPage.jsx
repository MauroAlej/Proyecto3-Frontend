import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
  const [nameInput,setNameInput]= useState(false)
  const [userInput,setUserInput]= useState(false)
  const [passInput,setPassInput]= useState(false) 
   const [repeatPassInput,setRepeatPassInput]= useState(false)
  const [formInputs, setFormInputs] = useState({
    name: '',
    user: '',
    pass: '',
    repeatPass: ''
  })

const navigate = useNavigate()


const handleChange = (ev)=>{
  const{name,value}=ev.target
 
  setFormInputs({...formInputs,[name]: value})
  if (formInputs.name) {
    setNameInput(false);
  }
  if (formInputs.user) {
    setUserInput(false);
  }
  if (formInputs.pass) {
    setPassInput(false);
  }
  if (formInputs.repeatPass) {
    setRepeatPassInput(false);
  }
}

useEffect(()=>{
  console.log(formInputs);
},[formInputs])





const handleSubmit = async () => {
  // Reiniciar todas las variables de estado relacionadas con la validación
 

  // Validar individualmente cada campo y establecer las variables de estado según sea necesario
  if (formInputs.name) {
    setNameInput(false);
  }
  if (formInputs.user) {
    setUserInput(false);
  }
  if (formInputs.pass) {
    setPassInput(false);
  }
  if (formInputs.repeatPass) {
    setRepeatPassInput(false);
  }else{
    setNameInput(true)
  setUserInput(true)
  setPassInput(true)
    setRepeatPassInput(true)
  }

  // Verificar la igualdad de las contraseñas
  if (formInputs.pass === formInputs.repeatPass) {
    const res = await fetch("http://localhost:2020/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formInputs.name,
        usuario: formInputs.user,
        contrasenia: formInputs.pass,
      }),
    });

    const data = await res.json();

    if (data.status === 201) {
      Swal.fire(
        "registro exitoso",
        "iniciar sesión para perfil",
        "success"
      );
     navigate("/")
    } 
  }
};


  return (
    <>
     <style>
        {`
          body {
            background-image: url("../public/comida-tipica-de-china\ \(1\).jpg"); /* Reemplaza 'ruta-de-la-imagen.jpg' con la ruta de tu imagen */
            background-size: cover; /* Ajusta el tamaño de la imagen para cubrir todo el fondo */
            background-repeat: no-repeat; /* Evita la repetición de la imagen */
            background-attachment: fixed; /* Fija la imagen para que no se desplace con el contenido */
            /* Agrega cualquier otra propiedad CSS que desees */
            
          }
         
        `}
      </style>
  
        
     
 <div className='d-flex justify-content-center mt-5'>
        <form  className='class-form'>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">Nombre y Apellido</label>
            <input type="text" name='name' className={ nameInput ? "form-control is-invalid": "form-control"} id="exampleInputEmail3" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
            <input type="text" name='user' className={userInput? "form-control is-invalid": "form-control"} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label ">Contraseña</label>
            <input type="password" name='pass' onChange={handleChange} className={passInput? "form-control is-invalid": "form-control"} id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Repetir Contraseña</label>
            <input type="password" name='repeatPass' onChange={handleChange} className={repeatPassInput? "form-control is-invalid": "form-control"} id="exampleInputPassword2" />
          </div>
        
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
      
    </>
  )
}

export default RegisterPage