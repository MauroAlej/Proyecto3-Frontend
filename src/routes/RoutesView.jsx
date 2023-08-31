import React from 'react'
import HomePage from '../page/HomePage'
import {Routes, Route} from "react-router-dom"

const RoutesView = () => {
  return (
    <Routes>
        <Route path ="/" element = {<HomePage/>}/>
    </Routes>
  )
}

export default RoutesView