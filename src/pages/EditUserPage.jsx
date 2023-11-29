import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


const EditUserPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [inputCheckForms, setInputCheckForms] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        userName: '',
        role: ''
    })

    const getUsers = async () => {
        const token = JSON.parse(localStorage.getItem('token'))

        const res = await fetch(`http://localhost:2020/api/users/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })

        const { getUser } = await res.json()
        setFormValues({
            name: getUser.nombre,
            userName: getUser.usuario,
            role: getUser.role
        })
    }

    const handleChange = (ev) => {
        setFormValues({ ...formValues, [ev.target.name]: ev.target.value })
        if (formValues.name) {
            setInputCheckForms(false)
        }
    }

    const handleClick = async (ev) => {
        ev.preventDefault()
        const token = JSON.parse(localStorage.getItem('token'))

        if (formValues.name === '' && formValues.userName === '' && formValues.role === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Campos vacios!',
            })
        } else if (formValues.name === '') {
            setInputCheckForms(true)
        } else {
            const res = await fetch(`http://localhost:2020/api/users/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    nombre: formValues.name,
                    usuario: formValues.userName,
                    role: formValues.role
                })
            })
            const resUpdateUser = await res.json()

            if (resUpdateUser.status === 200) {
                Swal.fire(
                    'Usuario editado correctamente!',
                    'success'
                )
            }

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


            <div className='d-flex justify-content-center mt-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                        <input type="text" name='name' value={formValues.name} className={inputCheckForms ? "form-control is-invalid" : 'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Usuario</label>
                        <input type="text" name='userName' value={formValues.userName} className={inputCheckForms ? "form-control is-invalid" : 'form-control'} id="exampleInputPassword1" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword3" className="form-label">Rol</label>
                        <select className="form-select" name='role' aria-label="Default select example">
                            <option value="1">Administrador</option>
                            <option value="2">Usuario</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Editar</button>
                </form>
            </div>
        </>
    )
}

export default EditUserPage