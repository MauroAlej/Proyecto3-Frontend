import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const AdminPage = () => {
  const [products, setProducts] = useState([])
  const [refreshProd, setRefreshProd] = useState(false);

  const getAllProductsHome = async () => {
    const res = await fetch('http://localhost:2020/api/products')
    const {getAllProd} = await res.json()
    setProducts(getAllProd)
  }

  const deleteProductHome = async(id) => {
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
              fetch(`http://localhost:2020/api/products/${id}`, {
                method: 'DELETE',
                headers:{
                    'Content-Type':'aplication/json'
                },
            })
            .then(res => res.json())
            .then(res => {
              if (res.status === 200) {
                swalWithBootstrapButtons.fire(
                  'Eliminado!',
                  'success'
                )
              }
            })
            setRefreshProd(true)
      } else if (
       result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  useEffect(() => {
    getAllProductsHome()
    setRefreshProd(false)
}, [refreshProd])
 
  return (
   <>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Estado</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((producto) => 
        <tr>
          <th scope="row">{producto._id}</th>
          <td>{producto.nombre}</td>
          <td>{producto.precio}</td>
          <td>{producto.estado}</td>
          <td>
            <Link to={`/editProd/${producto._id}`} className='btn btn-success'>Editar</Link>
            <button className='btn btn-danger' onClick={() => deleteProductHome(producto._id)}>Eliminar</button>
          </td>
        </tr>
       )
    }
    
  </tbody>
</table>
   </>
  )
}

export default AdminPage