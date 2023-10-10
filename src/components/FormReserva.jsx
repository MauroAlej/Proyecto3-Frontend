import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useParams } from 'react-router-dom';


const FormReserva = () => {
  const params = useParams()
  const [reloadPage, setReloadPage] = useState(false)
  const [formValue, setFormValue] = useState({
    nombre: '',
    invitados: '',
    motivo: '',
    role: 'user',
    login: true,
    deleted: false
  })

  const getOneUsers = async() => {
    const res = await fetch(`http://localhost:2020/api/users/${params.id}`)
    const { getUser } = await res.json()
    setFormValue({
        nombre: getUser.nombre
        
    })
}


const handleChange = (ev) => {
    const {name, value} = ev.target
    setFormValue({...formValue, [name]: value})
  }

  const handleClick = (ev) => {
    if(formValue.nombre && formValue.invitados && formValue.motivo){
      localStorage.setItem('reserva', JSON.stringify(formValue))
      Swal.fire({
        icon: 'success',
        title: 'Reserva Guardada',
        showConfirmButton: false,
        timer: 1500
      })

      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formulario incompleto',
      })
    }
  }
    
  useEffect(() => {
    getOneUsers()
    setReloadPage(false)
}, [reloadPage])



 /*  const errorMessage = Validate(nombreUsuario, invitados, motivo); */

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
      
     <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" name='nombre' defaultValue={formValue.nombre} onChange={handleChange} placeholder="nombre" required pattern="[A-Za-z]{3,30}"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Cantidad de Invitados</Form.Label>
      <Form.Control type="number" name='invitados' onChange={handleChange} placeholder="ingrese numeros" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Motivo</Form.Label>
      <Form.Control type="text" name='motivo' onChange={handleChange} placeholder="cumpleaños, cena, celebración" required pattern="[A-Za-z]{3,30}"/>
    </Form.Group>


     <div className='d-flex mb-5 color-text-white'>
       
     <LocalizationProvider name='fechaYhora' dateAdapter={AdapterDayjs} required>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        
        <DemoItem  label="Seleccionar hora y fecha">
          <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        
      </DemoContainer>
    </LocalizationProvider>

     </div>

    <button className= 'btn rounded-pill btn-success' onClick={handleClick}>Enviar Reserva</button>
  </Form>
 

  </div>

  <div className='d-flex justify-content-center mt-5 mx-5 px-5'>
    <p>¡NOTA IMPORTANTE!

Dispone de 15 minutos de cortesía. pasado ese tiempo sin haber recibido comunicación por parte del cliente, y/o si el número de comensales presentados difiere significativamente al de la reserva, esta quedará anulada.</p>
  </div>
    </>

  
  )
}



export default FormReserva