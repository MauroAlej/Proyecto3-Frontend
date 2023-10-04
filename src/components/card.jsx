import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardProd = ({array}) => {

  const handleClick = async(id)=>{
    const idUser = JSON.parse(localStorage.getItem('idUser'))
    const resCart = await fetch(`http://localhost:2020/api/users/${idUser}`)
    const dataCart = await resCart.json()
    
    const idCart = dataCart.getUser.idCart
    const resProd = await fetch(`http://localhost:2020/api/cart/${idCart}/${id}`,{
      method: 'POST',
      headers:{
        "content-type":"application/json"
      }
    })
    const dataProd = await resProd.json() 
    
    if(dataProd.status === 400){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: dataProd.msg,
    
      })
    }else{
      Swal.fire(
        'Good job!',
        dataProd.msg,
        'success'
      )
    }
    

  }

  return (
    
    <>
    {
     array.map((prod)=>
     
       <Card key ={prod._id} style={{ width: '18rem' }} >
    
          <Card.Body>
            <Card.Img variant="top" src={prod.imagen} />
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text className='text-dark'>
              ${prod.precio}
            </Card.Text>
            <Link></Link>
            <button className='btn btn-outline-success' onClick={()=> handleClick(prod._id)}>Agregar Carrito</button>
          </Card.Body>
        </Card>
        
  )
    }
    </>

    
  );

}

export default CardProd