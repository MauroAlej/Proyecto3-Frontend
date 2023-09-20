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
    setReloadPage(false)
}, [reloadPage])

 /*  const errorMessage = Validate(nombreUsuario, invitados, motivo); */

  return (


   <div className='d-flex w-50 mt-5 justify-content-center'>
     <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" name='nombre' defaultValue={formValue.nombre} onChange={handleChange} placeholder="nombre" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Cantidad de Invitados</Form.Label>
      <Form.Control type="number" name='invitados' onChange={handleChange} placeholder="ingrese numeros" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Motivo</Form.Label>
      <Form.Control type="text" name='motivo' onChange={handleChange} placeholder="cumpleaños, cena, celebración" required />
    </Form.Group>

    <div className='d-flex mb-3'>
      
       <LocalizationProvider name='fechaYhora' dateAdapter={AdapterDayjs} required>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        
        <DemoItem label="Seleccionar hora y fecha">
          <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        
      </DemoContainer>
    </LocalizationProvider>
    </div>

    
    <Button variant='success' onClick={handleClick}>Enviar Reserva</Button>
  </Form>

   </div>
  )
}



export default FormReserva