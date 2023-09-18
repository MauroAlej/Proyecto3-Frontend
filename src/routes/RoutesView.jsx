import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
// import {Routes, Route} from "react-router-dom";
import LoginPages from '../pages/LoginPages';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../page/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from "../pages/CartPage";


const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPages/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/cartUser' element={<CartPage/>}/>

    </Routes>
  )
}

export default RoutesView