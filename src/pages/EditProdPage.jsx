import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const EditProdPage = () => {
    const params = useParams()
    const [inputCheckName, setInputCheckName] = useState(false)
    const [inputCheckPrice, setInputCheckPrice] = useState(false)
    const [inputCheckStatus, setInputCheckStatus] = useState(false)
    const [reloadPage, setReloadPage] = useState(false)
    const [formValues, setFormValues] = useState({
        name:'',
        price: 0,
        status:''
    })

    const getProduct = async() => {
        const res = await fetch(`http://localhost:2020/api/products/${params.id}`)
        const { getOneProd } = await res.json()
        setFormValues({
            name: getOneProd.nombre,
            price: getOneProd.precio,
            status: getOneProd.estado
        })
    }

    const handleChange = (ev) => {
        setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
        if(formValues.name && formValues.price && formValues.status){
            setInputCheckName(false)
            setInputCheckPrice(false)
            setInputCheckStatus(false)
        }
    }

    const handleClick = async(ev) => {
        ev.preventDefault()
        console.log(formValues)
        if(formValues.name === '' && formValues.price === '' && formValues.status === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
              })
        } else if (formValues.name === '' && formValues.price === '' && formValues.status === ''){
            setInputCheckName(true)
            setInputCheckPrice(true)
            setInputCheckStatus(true)
        } else {
            const res = await fetch(`http://localhost:2020/api/products/${params.id}`, {
                method: 'PUT',
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify({
                    nombre: formValues.name,
                    precio: formValues.price,
                    estado: formValues.status
                })
            })
            const data = await res.json()
            console.log(data)
           /*  const { getAllProd } = await res.json()
            setProducts(getAllProd) */
            /* setReloadPage(true) */
     /*        const resUpdateProd = await res.json()
            if(resUpdateProd.status === 201) {
     

              Swal.fire(
                'Producto actualizado!',
                'success'
              )
        } */
    }}
   
    useEffect(() => {
      console.log(formValues)
}, [formValues])

    useEffect(() => {
      getProduct()
}, [])

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
    <input type="text" name='name' value={formValues.name} className={inputCheckName ? "form-control is-invalid": 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
    <input type="number" name='price' value={formValues.price} className={inputCheckPrice ? "form-control is-invalid": 'form-control'} id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Estado</label>
    <input type="text" name='status' value={formValues.status} className={inputCheckStatus ? "form-control is-invalid": 'form-control'} id="exampleInputPassword2" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Editar</button>
</form>
 </div>
 </>
  )
}

export default EditProdPage