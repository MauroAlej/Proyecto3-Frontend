import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const CreateUserPage = () => {
  const navigate = useNavigate()
    const [inputCheckForms, setInputCheckForms] = useState(false)
    const [formValues, setFormValues] = useState({
        name:'',
        userName: '',
        pass: '',
        rpass: '',
        role:''
    })


    const handleChange = (ev) => {
        setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
        if(formValues.name){
            setInputCheckForms(false)
        }
    }

    const handleClick = async(ev) => {
        ev.preventDefault()
        if(formValues.name === '' && formValues.userName === '' && formValues.pass === '' && formValues.rpass === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
              })
        }else if(formValues.name === ''){
            setInputCheckForms(true)
        }else{
          if(formValues.pass !== formValues.rpass){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '¡usuario y/o contraseña incorrecta!',
            })
            return
          }
            const res = await fetch('http://localhost:2020/api/users', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    nombre: formValues.name,
                    usuario: formValues.userName,
                    role: formValues.role,
                    contrasenia: formValues.pass
                })
            })
            const resCreateProd = await res.json()
            
            if(resCreateProd.status === 201) {
             

              Swal.fire(
                'Se creo el usuario!',
                'success'
              )
            
              setFormValues({
                name:'',
                userName: '',
                pass: '',
                rpass: '',
                role:''
              })

              setTimeout(() => {
                navigate('/adminUser')
              }, 1000);
            }
            
        }
    }

  return (
    <>
   

  <div className='d-flex justify-content-center mt-5'>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
    <input type="text" name='name' value={formValues.name} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputEmail2" className="form-label">Usuario</label>
    <input type="text" name='userName' value={formValues.userName} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputEmail2" aria-describedby="emailHelp" onChange={handleChange}/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" name='pass' value={formValues.pass} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword1" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Repetir Contraseña</label>
    <input type="password" name='rpass' value={formValues.rpass} className={inputCheckForms ? "form-control is-invalid": 'form-control'} id="exampleInputPassword2" onChange={handleChange}/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword3" className="form-label">Rol</label>
  <select className="form-select" name='role' aria-label="Default select example">
  <option value="1">Administrador</option>
  <option value="2">Usuario</option>
  </select>
    </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Crear Usuario</button>
</form>
  </div>
  </>
  )
}

export default CreateUserPage