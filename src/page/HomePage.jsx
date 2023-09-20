import React, { useEffect, useState } from 'react'
import CardProd from '../components/card'
import Footer from '../components/Footer'


const HomePage = () => {

  const[products, setProducts] = useState([])

  const getProductDB = async () => {
    const res =await fetch('http://localhost:2020/api/products')
    const {getAllProd} = await res.json()
    setProducts(getAllProd)
  }

  useEffect(()=> {
    getProductDB()
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
        <CardProd array = {products}/>
      </div>
      <div>



      </div>
      
    </div>
    
    </>
  )
}

export default HomePage