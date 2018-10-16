import React, { Component } from 'react'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'

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

  render () {

    const {order, actions, clicker} = this.props
    let totalPrice = 0
    return (
        <Segment basic style={{display: 'block', position:'fixed', width: '280px', marginTop:'22px', alignSelf: 'flex-end'}} >
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
                        <Table.Cell verticalAlign='middle'>
                          <div className='orderTemp_list_1'>
                            <div style={{paddingBottom: '5px'}}><b>
                              {item.store_name} - {item.name}</b>
                            </div>
                            <div className='orderTemp_list_2'>
                              <div>${item.price.toFixed(2)}</div>
                              <div>*</div>
                              <div>{item.quantity}</div>
                              <div>=</div>
                              <div>${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                            <div style={{textAlign: 'right'}}>
                              <Button basic color='green' size='tiny' onClick={() => {
                                actions.addToOrder(item)
                                // this.calculate_total_price(item.price)
                                totalPrice += item.price
                              }}>+
                              </Button>
                              <Button basic color='green' size='tiny' onClick={() => {
                                actions.removeFromOrder(item)
                                // this.calculate_total_price(-(item.price))
                                totalPrice -= item.price
                              }}>-
                              </Button>
                              <Button basic color='green' size='tiny'
                                      onClick={() => {
                                        actions.removeAllFromOrder(item)
                                        // this.calculate_total_price(-(item.price * item.quantity))
                                        totalPrice -= (item.price * item.quantity)
                                      }}
                              >
                                Remove all
                              </Button>
                            </div>
                          </div>
                        </Table.Cell>
                      </Table.Row>)
                  })
                  :
                  ''
              }
            </Table.Body>
          </Table>
          <Segment basic>
            <div>Total: ${totalPrice.toFixed(2)}</div>
            <div style={{textAlign: 'right', marginTop: '10px'}}>
              <Button basic color='red' size='tiny' onClick={() => {actions.setOrderInitialState()}}>Reset
                Order</Button>
              <Button basic color='green' size='tiny' style={{display: isEmpty(order) ? 'none' : ''}}
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
