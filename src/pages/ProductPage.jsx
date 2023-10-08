import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

    const params = useParams()
    const [product,SetProduct] = useState({})

    const getOneProduct = async () =>{
        const res = await fetch(`http://localhost:2020/api/products/${params.id}`)
        const {getOneProd} = await res.json()
        SetProduct(getOneProd)        
    }

    useEffect(()=>{
        getOneProduct()
    },[])

  return (
    <>
        <h2>Producto</h2>
        <hr />
        {
            <div className='d-flex justify-content-center'>
        <Card style={{ width: '18rem' }} className='d-flex justify-content-center'>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
}


     </>
  )
}

export default ProductPage