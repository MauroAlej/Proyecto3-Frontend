import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CardProd from '../components/card'


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
    </div>
    
    </>
  )
}

export default HomePage