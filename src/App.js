import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Router from './router'

const Navigation = (props) => <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Ming-Zhao's Shop
  </a>
  <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link" to='/'>Home</NavLink>
      <NavLink className="nav-item nav-link" to='/orders'>My Orders</NavLink>
    </div>
  </div>
</nav>

class App extends Component {
  render () {
    return (
      <div className="container">
        <Navigation/>
        <header className="jumbotron">
          <h1 className="App-title">Welcome to the store</h1>
        </header>
        <Router/>
      </div>
    )
  }
}

export default App

