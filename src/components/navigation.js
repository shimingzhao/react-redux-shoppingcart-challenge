import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import HomePage from './homepage'
import Orders from './orderspage'
import App from './contextapi'


export default class Navigation extends Component {
  state = {activeItem: 'menu'}
  handleItemClick = (e, name) => {
    this.setState({activeItem: name.name})
  }

  render () {
    const {activeItem} = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='menu' active={activeItem === 'menu'} onClick={this.handleItemClick} />
          <Menu.Item name='orders' active={activeItem === 'orders'} onClick={this.handleItemClick} />
          <Menu.Item name='light' active={activeItem === 'light'} onClick={this.handleItemClick} />
        </Menu>
        <Segment basic>
          {(activeItem === 'menu') ? <HomePage clicker={this.handleItemClick}/> : ''}
          {(activeItem === 'orders') ? <Orders clicker={this.handleItemClick} /> : ''}
          {(activeItem === 'light') ? <App clicker={this.handleItemClick} /> : ''}
        </Segment>
      </div>
    )
  }
}


