import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const AdminUserPage = () => {
  const [users, setUsers] = useState([])
  const [refreshUser, setRefreshUser] = useState(false);

  const getAllUsers = async () => {
    const token = JSON.parse(localStorage.getItem('token'))

    const res = await fetch('http://localhost:2020/api/users', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    })
    const { allUsers } = await res.json()
    setUsers(allUsers)
  }

  const deleteUser = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'))

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:2020/api/users/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              swalWithBootstrapButtons.fire(
                'Uusuario Eliminado!',
                'success'
              )
            }
          })
        setRefreshUser(true)
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado'

        )
      }
    })
  }

  useEffect(() => {
    getAllUsers()
    setRefreshUser(false)
  }, [refreshUser])

  return (
    <>

      <div className='d-flex mt-5 mb-3 mx-5'>
        <Link to={'/createUser'} className='btn btn-danger'>Crear Nuevo Usuario</Link>
      </div>

      <div className='d-flex mx-5 color-table'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Usuario</th>
              <th scope="col">Role</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((usuario) =>
                <tr key={usuario._id}>
                  <th scope="row">{usuario._id}</th>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.usuario}</td>
                  <td>{usuario.role}</td>
                  <td>
                    <Link to={`/editUser/${usuario._id}`} className='btn btn-success'>Editar</Link>
                    <button className='btn btn-danger' onClick={() => deleteUser(usuario._id)}>Eliminar</button>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminUserPage