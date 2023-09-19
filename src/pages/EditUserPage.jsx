import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const EditUserPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [inputCheckForms, setInputCheckForms] = useState(false)
    const [formValues, setFormValues] = useState({
        name:'',
        userName:'',
        role:''
    })

    const getUsers = async() => {
        const res = await fetch(`http://localhost:2020/api/users/${params.id}`)
        const { getUser } = await res.json()
        setFormValues({
            name: getUser.nombre,
            userName: getUser.usuario,
            role: getUser.role
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
        if(formValues.name === '' && formValues.userName === '' && formValues.role === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
              })
        }else if(formValues.name === ''){
            setInputCheckForms(true)
        }else{
            const res = await fetch(`http://localhost:2020/api/users/${params.id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body: JSON.stringify({
                    nombre: formValues.name,
                    usuario: formValues.userName,
                    role: formValues.role
                })
            })
            const resUpdateUser = await res.json()
            if(resUpdateUser.status === 200){
                Swal.fire(
                    'Usuario editado correctamente!',
                    'success'
                  )
            }
            setFormValues({
                name: '',
                userName: '',
                role: ''
            })
            setTimeout(() => {
                navigate('/adminUser')
            }, 1500);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

  return (
   <>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" name='name' value={formValues.name} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Usuario</label>
    <input type="text" name='userName' value={formValues.userName} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label">Role</label>
    <input type="text" name='role' value={formValues.role} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword2" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Editar</button>
</form>
   </>
  )
}

export default EditUserPage