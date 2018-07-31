import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import HomePage from './homepage'
import Orders from './orderspage'
import { NavLink } from 'react-router-dom'
// import Router from './router'

export default class Navigation extends Component {
  state = {activeItem: 'home'}
  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render () {
    const {activeItem} = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='orders' active={activeItem === 'orders'} onClick={this.handleItemClick} />
        </Menu>
        <Segment basic>
          {/*<header className="jumbotron">*/}
            {/*<h1 className="App-title">Welcome to the store</h1>*/}
          {/*</header>*/}
          {(activeItem === 'home') ? <HomePage/> : ''}
          {(activeItem === 'orders') ? <Orders/> : ''}
        </Segment>
      </div>
    )
  }
}
