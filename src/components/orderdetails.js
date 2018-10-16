import React, { Component } from 'react'
import { Segment, Table, Button, Modal, Grid } from 'semantic-ui-react'

function sort (items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

export default class OrderDetail extends Component {
  state = {open: false}

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({closeOnEscape, closeOnDimmerClick, open: true})
  }

  close = () => {
    this.setState({open: false})
  }

  render () {
    const {order, actions, clicker} = this.props
    const {open, closeOnEscape, closeOnDimmerClick} = this.state
    return (
      <div>
        <div>
          {
            order ?
              sort(order.order).map((item, index) => {
                return (
                  <div key={index} className='orderList'>
                    <div style={{width:'50%'}}>{item.store_name} - {item.name}</div>
                    <div style={{width:'10%'}}>{item.quantity}</div>
                    <div style={{width:'20%'}}>${item.price.toFixed(2)}</div>
                    <div style={{width:'20%'}}>${(item.price * item.quantity).toFixed(2)}</div>
                  </div>)
              })
              :
              ''
          }
        </div>
        <div className='total'>
          <div style={{paddingBottom: '10px'}}>Total: ${order.price.toFixed(2)}</div>
          <div style={{display: order.checkout_state ? 'none' : ''}}>
            <Button basic color='green' onClick={(e) => {
              actions.editOrder(order.order)
              actions.deleteOrder(order)
              let obj = {
                name: 'menu'
              }
              clicker(e, obj)
            }}>
              Edit
            </Button>
            <Button basic color='green' onClick={() => {actions.deleteOrder(order)}}>Delete</Button>
            <Button basic color='green' onClick={this.closeConfigShow(false, true)}>Checkout</Button>
            <Modal
              centered={false}
              open={open}
              closeOnEscape={closeOnEscape}
              closeOnDimmerClick={closeOnDimmerClick}
              // onClose={(e) => {
              //   actions.
              // }}
              size='tiny'
            >
              <Modal.Header>Order ID: {order.order_id}</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Grid>
                    {
                      order ?
                        sort(order.order).map((item, index) => {
                          return (
                            <Grid.Row key={index} columns={4}>
                              <Grid.Column verticalAlign='middle'>{item.name}</Grid.Column>
                              <Grid.Column verticalAlign='middle'>{item.quantity}</Grid.Column>
                              <Grid.Column verticalAlign='middle'>${item.price.toFixed(2)}</Grid.Column>
                              <Grid.Column
                                verticalAlign='middle'>${(item.price * item.quantity).toFixed(2)}</Grid.Column>
                            </Grid.Row>)
                        })
                        :
                        ''
                    }
                  </Grid>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
                <div style={{}}>Total Price: ${order.price.toFixed(2)}</div>
                <Button
                  onClick={() => {
                    actions.checkoutOrder(order)
                    this.close()
                  }

                  }
                  positive
                  labelPosition='right'
                  icon='checkmark'
                  content='Checkout'
                />
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}
