import React, { Component, Fragment } from 'react'
import { HashRouter } from 'react-router-dom'
import ApiRoute from "../src/Routes/ApiRoute"

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
         <ApiRoute></ApiRoute>
        </HashRouter>
        
      </Fragment>
    )
  }
}
export default App