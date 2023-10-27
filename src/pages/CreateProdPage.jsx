import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const createProductHome = () => {
  const navigate = useNavigate()
    const [inputCheckForms, setInputCheckForms] = useState(false)
    const [formValues, setFormValues] = useState({
        nombre:'',
        precio: 0,
        estado:''
    })


    const handleChange = (ev) => {
        setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
        if(formValues.nombre){
            setInputCheckForms(false)
        }
    }

    const handleClick = async(ev) => {
        ev.preventDefault()
        if(formValues.nombre === '' && formValues.precio === '' && formValues.estado === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
              })
        }else if(formValues.nombre === ''){
            setInputCheckForms(true)
        }else{
            const res = await fetch('http://localhost:2020/api/products', {
                method: 'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body: JSON.stringify({
                    nombre: formValues.nombre,
                    precio: formValues.precio,
                    estado: formValues.estado
                })
            })
            const resCreateProd = await res.json()
            
            if(resCreateProd.status === 201) {
             

              Swal.fire(
                'Se creo el producto!',
                'success'
              )
            
              setFormValues({
                nombre:'',
                precio: 0,
                estado:''
              })

              setTimeout(() => {
                navigate('/admin')
              }, 1000);
            }
            
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
     <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" name='nombre' value={formValues.nombre} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} required/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
    <input type="number" name='precio' value={formValues.precio} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword1" onChange={handleChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Estado</label>
    <input type="text" name='estado' value={formValues.estado} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword2" onChange={handleChange} required/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Crear Producto</button>
</form>
   </div>
   </>
  )
}

export default createProductHome