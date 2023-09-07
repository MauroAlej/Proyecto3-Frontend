import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPages from '../pages/LoginPages'
import RegisterPage from '../pages/RegisterPage'
const RoutesView = () => {
  return (
    <Routes>
  <Route path='/login' element={<LoginPages/>}/>
  <Route path='/register' element={<RegisterPage/>}/>

    </Routes>
  )
}

export default RoutesView