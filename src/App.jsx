import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"
import RoutesView from "./routes/RoutesView";
import Footer from "./components/footer";




const App =() => {

  return(
    <Router>
      <Navbar/>
  
      <RoutesView/>
      <Footer />
  </Router>
  )
}

export default App