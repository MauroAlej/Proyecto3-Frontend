import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const EditProdPage = () => {
    const params = useParams()
    const [inputCheckForms, setInputCheckForms] = useState(false)
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
        if(formValues.name){
            setInputCheckForms(false)
        }
    }

    const handleClick = async(ev) => {
        ev.preventDefault()
        if(formValues.name === '' && formValues.price === '' && formValues.status === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
              })
        }else if(formValues.name === ''){
            setInputCheckForms(true)
        }else{
            const res = await fetch(`http://localhost:2020/api/products/${params.id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body: JSON.stringify({
                    nombre: formValues.name,
                    precio: formValues.price,
                    estado: formValues.status
                })
            })
            const resUpdateProd = await res.json()
            console.log(resUpdateProd)
            setReloadPage(true)
        }
    }

    useEffect(() => {
        getProduct()
        setReloadPage(false)
    }, [reloadPage])

  return (
   <>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" name='name' value={formValues.name} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Precio</label>
    <input type="number" name='price' value={formValues.price} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label">Estado</label>
    <input type="text" name='status' value={formValues.status} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword2" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Editar</button>
</form>
   </>
  )
}

export default EditProdPage