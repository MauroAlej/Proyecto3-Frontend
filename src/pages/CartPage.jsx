import React, { useEffect, useState } from 'react'

const CartPage = () => {

  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [cantidadState, setCantidadState] = useState({})
  let suma = 0

  const getCartUser = async() => {
    const token = JSON.parse(localStorage.getItem('token'))
    
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    const resCart = await fetch(`http://localhost:2020/api/users/${idUser}`,  {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${token}`
      }
    })
    const dataCart = await resCart.json()


    const idCart = dataCart.getUser.idCart
    const resProd = await fetch(`http://localhost:2020/api/cart/${idCart}`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${token}`
      }
    })
    const dataProd = await resProd.json()
    
    const valoresIniciales = {}

    dataProd.getCart.products.forEach(producto =>{
      valoresIniciales[producto._id] = 0
      console.log(valoresIniciales)
      setCantidadState(valoresIniciales)
    })

    setCart(dataProd.getCart.products)
  }

  const handleChange = (ev, idProd) => {
    const {value} = ev.target
    
    setCantidadState({...cantidadState, [idProd]: parseInt(value)})
  }

  const getResult = (precio, cantidad) => {
     const res = precio * cantidad 
     if (isNaN(res)){
      return 0
     }else{
      suma = suma + res
      return res
      
     }
  }

  const handleClickMP = async () =>{
    const token = JSON.parse(localStorage.getItem('token'))

    const res = await fetch('http://localhost:2020/api/pay',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${token}`
      },
    
    })

    const data = await res.json()
    location.href = `${data.res.init_pointpu}`
  }


  useEffect(() => {
    getCartUser()
  },[])

  useEffect(() => {
    getResult()
  },[cantidadState])

 

  return (
    <>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((producto) => 
        <tr key= {producto._id}>
      
        <td scope="row">{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>
          <input type="number" className='w-25' onChange={(ev) => handleChange(ev,producto._id)}/>
        </td>
        <td>
          {
            getResult(producto.precio, cantidadState[producto._id])
          }
        </td>
      </tr>)
      }
    </tbody>
  </table>  

  <div className='d-flex justify-content-between px-5'>
  <button className='btn btn-primary'onClick={handleClickMP}>Pagar</button>
    <h2>{suma}</h2>
  </div>
  
    
    </>
  )
}

export default CartPage