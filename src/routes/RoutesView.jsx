import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPages from '../pages/LoginPages'
import RegisterPage from '../pages/RegisterPage'
import Reserva from '../pages/Reserva'
const RoutesView = () => {
  return (
    <Routes>
  <Route path='/login' element={<LoginPages/>}/>
  <Route path='/register' element={<RegisterPage/>}/>
  <Route path='/reserva' element={<Reserva/>}/>


    </Routes>
  )
}

export default RoutesView