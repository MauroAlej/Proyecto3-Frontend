import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import RoutesView from "./routes/RoutesView";
<<<<<<< HEAD

=======
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ContactPage from "./pages/ContactPage";
>>>>>>> d809932d247e6b5760f642f3f899c221ca90d27b

const App =() => {

  return(
    <Router>
      <Navbar/>
      <RoutesView/>

  </Router>
  )
}

export default App