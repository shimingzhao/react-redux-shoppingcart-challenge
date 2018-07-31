import React from 'react'
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

const Order = (props) => {
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
            props.order ?
              sort(props.order).map((item, index) => {
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
                          props.actions.addToOrder(item)
                          // this.calculate_total_price(item.price)
                          totalPrice += item.price
                        }}>+
                        </Button>
                        <Button basic color='green' onClick={() => {
                          props.actions.removeFromOrder(item)
                          // this.calculate_total_price(-(item.price))
                          totalPrice -= item.price
                        }}>-
                        </Button>
                        <Button basic color='green'
                                onClick={() => {
                                  props.actions.removeAllFromOrder(item)
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
          <Button basic color='red' onClick={() => {props.actions.setOrderInitialState()}}>Reset Order</Button>
          <Button basic color='green' style={{display: isEmpty(props.order) ? 'none' : ''}}
                  onClick={() => {
                    props.actions.placeOrder(props.order, totalPrice)
                    props.actions.setOrderInitialState()
                  }}>Place order
          </Button>
        </div>
      </Segment>
    </Segment>
  )
}

export default Order