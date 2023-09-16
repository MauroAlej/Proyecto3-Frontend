import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPages from '../pages/LoginPages'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../page/HomePage'
import Reserva from '../pages/Reserva'
import AdminPage from '../pages/AdminPage'


const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPages/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/reserva' element={<Reserva/>}/>
    <Route path='/admin' element={<AdminPage/>}/>

    </Routes>
  )
}

export default RoutesView