import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import RoutesView from "./routes/RoutesView";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ContactPage from "./pages/ContactPage";


const App =() => {

  return(
    <Router>
      <Navbar/>
      <RoutesView/>

  </Router>
  )
}

export default App