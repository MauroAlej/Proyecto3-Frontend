import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Reserva = () => {
  const [reloadPage, setReloadPage] = useState(false)
  const [formValues, setFormValues] = useState({
    nombre: '',
    invitados: '',
    motivo: '',
    fecha: '',
    hora: '',
    login: true,
  })
  
      
    const handleChange = (ev) => {
        setFormValues({...formValues, [ev.target.name]: ev.target.value})
    }

    const handleClick = async (ev) => {
     try {
      ev.preventDefault()
      const res = await fetch('http://localhost:2020/api/reserva', formValues)
      console.log(res)
      if(res.status === 201){
        if (formValues.nombre && formValues.invitados && formValues.motivo && formValues.fecha && formValues.hora){
          Swal.fire(
            'Good job!',
            res.formData.msg,
            'success'
             )      }
        }
       
         else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Formulario incompleto',
          })
        }
     } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data?.msg,
      }
      )
     }
    }
    
  return (
    <>
     <style>
    {`
      body {
        background-image: url("../public/fondo-01.jpg"); /* Reemplaza 'ruta-de-la-imagen.jpg' con la ruta de tu imagen */
        background-size: cover; /* Ajusta el tamaño de la imagen para cubrir todo el fondo */
        background-repeat: no-repeat; /* Evita la repetición de la imagen */
        background-attachment: fixed; /* Fija la imagen para que no se desplace con el contenido */
        /* Agrega cualquier otra propiedad CSS que desees */
        color: #fff
        
        }
     
    `}
  </style>
  <div className='d-flex justify-content-center mt-5'>
    <h2>Reserva</h2>
    </div>

  <div className='d-flex justify-content-center mt-5'>
  <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='nombre' defaultValue={formValues.nombre} onChange={handleChange} placeholder="nombre" required pattern="[A-Za-z]{3,30}"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Cantidad de Invitados</label>
    <input type="number" className="form-control" id="exampleInputPassword1" name='invitados' onChange={handleChange} placeholder="ingrese numeros" required/>
  </div>
  <div className="mb-3">
   <label htmlFor="exampleInputEmail2" className="form-label">Motivo</label>
    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name='motivo' onChange={handleChange} placeholder="cumpleaños, cena, celebración" required pattern="[A-Za-z]{3,30}"/>
  </div>
  <div className="mb-3">
   <label htmlFor="exampleInputEmail3" className="form-label">Fecha</label>
    <input type="date" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={handleChange} required/>
  </div>
  <div className="mb-3">
   <label htmlFor="exampleInputEmail4" className="form-label">Hora</label>
    <input type="time" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" onChange={handleChange} required/>
  </div>
  <button className= 'btn rounded-pill btn-success' onClick={handleClick}>Reservar</button>
</form>
  </div>

    <div className='d-flex justify-content-center mt-5 mx-5 px-5'>
    <p>¡NOTA IMPORTANTE!

Dispone de 15 minutos de cortesía. Pasado ese tiempo sin haber recibido comunicación por parte del cliente, y/o si el número de comensales presentados difiere significativamente al de la reserva, esta quedará anulada.</p>
  </div>
    </>

  )
}

export default Reserva

