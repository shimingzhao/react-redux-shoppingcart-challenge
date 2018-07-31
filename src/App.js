import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Router from './router'
import Navigation from './components/navigation'

class App extends Component {
  render () {
    return (
      <div className="page-container">
        <Navigation/>
        {/*<Router/>*/}
      </div>
    )
  }
}

export default App

