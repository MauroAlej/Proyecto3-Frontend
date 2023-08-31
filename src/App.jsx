import React from "react"
import HomePage from "./page/HomePage"
import {BrowserRouter as Router,} from "react-router-dom"
import RoutesView from "./routes/RoutesView"

const App =() => {

  return(
    <Router>
      <RoutesView/>
    </Router>
  )
}

export default App