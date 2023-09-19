import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
// import {Routes, Route} from "react-router-dom";
import LoginPages from '../pages/LoginPages';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../page/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFont from "../pages/notFont";


const RoutesView = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPages/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/404' element={<NotFont/>}/>
    </Routes>
  )
}

export default RoutesView