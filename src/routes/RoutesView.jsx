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
import Reserva from "../pages/Reserva";
import AdminPage from "../pages/AdminPage";
import EditProdPage from "../pages/EditProdPage";
import CreateProdPage from "../pages/CreateProdPage";



const RoutesView = () => {
  return (
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<LoginPages/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/404' element={<NotFont/>}/>
    <Route path='/cartUser' element={<CartPage/>}/>
    <Route path='/reserva' element={<Reserva/>}/>
    <Route path='/admin' element={<AdminPage/>}/>
    <Route path='/editProd' element={<EditProdPage/>}/>
    <Route path='/createProd' element={<CreateProdPage/>}/>
    

    </Routes>
  )
}

export default RoutesView