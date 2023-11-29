import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const EditProdPage = () => {
  const params = useParams()
  const [inputCheckName, setInputCheckName] = useState(false)
  const [inputCheckPrice, setInputCheckPrice] = useState(false)
  const [inputCheckStatus, setInputCheckStatus] = useState(false)
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    price: 0,
    status: ''
  })

  const getProduct = async () => {
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
    if (formValues.name && formValues.price && formValues.status) {
      setInputCheckName(false)
      setInputCheckPrice(false)
      setInputCheckStatus(false)
    }
  }

  const handleClick = async (ev) => {
    ev.preventDefault()
    const token = JSON.parse(localStorage.getItem('token'))

    if (formValues.name === '' && formValues.price === '' && formValues.status === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Campos vacios!',
      })
    } else if (formValues.name === '' && formValues.price === '' && formValues.status === '') {
      setInputCheckName(true)
      setInputCheckPrice(true)
      setInputCheckStatus(true)
    } else {
      const res = await fetch(`http://localhost:2020/api/products/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          nombre: formValues.name,
          precio: formValues.price,
          estado: formValues.status
        })
      })
      const resUpdateProd = await res.json()
      if (resUpdateProd.status === 200) {
        Swal.fire(
          'Producto editado correctamente!',
          'success'
        )
      }

      setTimeout(() => {
        navigate('/admin')
      }, 1500);
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>


      <div className='d-flex justify-content-center mt-5'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
            <input type="text" name='name' value={formValues.name} className={inputCheckName ? "form-control is-invalid" : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
            <input type="number" name='price' value={formValues.price} className={inputCheckPrice ? "form-control is-invalid" : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">Estado</label>
            <select className="form-select" value={formValues.status} aria-label="Default select example" onChange={handleChange} >
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Editar</button>
        </form>
      </div>
    </>
  )
}

export default EditProdPage


/* holis */