import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import RoutesView from "./routes/RoutesView";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";


const App =() => {

  return(
    <Router>
      <Navbar/>
      <RoutesView/>
<Footer/>
  </Router>
  )
}

export default App