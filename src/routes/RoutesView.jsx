<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginPages from '../pages/LoginPages'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../page/HomePage'
import Reserva from '../pages/Reserva'
import AdminPage from '../pages/AdminPage'
=======
=======

>>>>>>> f2e1bee97edf60d805bccd7a3bc5da18a39f16f0
import {  Routes, Route } from "react-router-dom";
import React from 'react';
// import {Routes, Route} from "react-router-dom";
import LoginPages from '../pages/LoginPages';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../page/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFont from "../pages/NotFont";
import CartPage from "../pages/CartPage";
<<<<<<< HEAD
>>>>>>> d809932d247e6b5760f642f3f899c221ca90d27b
=======
>>>>>>> f2e1bee97edf60d805bccd7a3bc5da18a39f16f0


const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPages/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
    <Route path='/reserva' element={<Reserva/>}/>
    <Route path='/admin' element={<AdminPage/>}/>
=======
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/404' element={<NotFont/>}/>

    <Route path='/cartUser' element={<CartPage/>}/>
>>>>>>> d809932d247e6b5760f642f3f899c221ca90d27b
=======
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/404' element={<NotFont/>}/>
      <Route path='/cartUser' element={<CartPage/>}/>
>>>>>>> f2e1bee97edf60d805bccd7a3bc5da18a39f16f0

    </Routes>
  )
}

export default RoutesView