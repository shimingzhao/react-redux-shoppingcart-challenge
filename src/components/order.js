import React, { Component } from 'react'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function sort (items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false
  }
  return true
}

export default class Order extends Component {

  render() {

    const {order, actions, clicker} = this.props
    let totalPrice = 0
    return (
      <Segment basic>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>ORDER SUMMARY</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              order ?
                sort(order).map((item, index) => {
                  // this.calculate_total_price(item.price * item.quantity)
                  totalPrice += (item.price * item.quantity)
                  return (
                    <Table.Row key={index}>
                      <Table.Cell verticalAlign='middle'>{item.name}</Table.Cell>
                      <Table.Cell verticalAlign='middle'>${item.price.toFixed(2)}</Table.Cell>
                      <Table.Cell verticalAlign='middle'>{item.quantity}</Table.Cell>
                      <Table.Cell verticalAlign='middle'>${(item.price * item.quantity).toFixed(2)}</Table.Cell>
                      <Table.Cell textAlign='right'>
                        <div>
                          <Button basic color='green' onClick={() => {
                            actions.addToOrder(item)
                            // this.calculate_total_price(item.price)
                            totalPrice += item.price
                          }}>+
                          </Button>
                          <Button basic color='green' onClick={() => {
                            actions.removeFromOrder(item)
                            // this.calculate_total_price(-(item.price))
                            totalPrice -= item.price
                          }}>-
                          </Button>
                          <Button basic color='green'
                                  onClick={() => {
                                    actions.removeAllFromOrder(item)
                                    // this.calculate_total_price(-(item.price * item.quantity))
                                    totalPrice -= (item.price * item.quantity)
                                  }}
                          >
                            Remove all
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>)
                })
                :
                ''
            }
          </Table.Body>
        </Table>
        <Segment basic className='total'>
          <div>Total: ${totalPrice.toFixed(2)}</div>
          <div>
            <Button basic color='red' onClick={() => {actions.setOrderInitialState()}}>Reset Order</Button>
            <Button basic color='green' style={{display: isEmpty(order) ? 'none' : ''}}
                    onClick={(e) => {
                      actions.placeOrder(order, totalPrice)
                      actions.setOrderInitialState()
                      let obj = {
                        name: 'orders'
                      }
                      clicker(e, obj)
                    }}>Place order
            </Button>
          </div>
        </Segment>
      </Segment>
    )
  }
}