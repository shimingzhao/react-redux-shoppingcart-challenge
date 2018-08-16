import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
        <Table striped size='small'>
          {/*<Table.Header/>*/}
          <Table.Body>
            {
              order ?
                sort(order.order).map((item, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell verticalAlign='middle'>{item.name}</Table.Cell>
                      <Table.Cell verticalAlign='middle' collapsing>{item.quantity}</Table.Cell>
                      <Table.Cell verticalAlign='middle' collapsing>${item.price.toFixed(2)}</Table.Cell>
                      <Table.Cell verticalAlign='middle'
                                  collapsing>${(item.price * item.quantity).toFixed(2)}</Table.Cell>
                    </Table.Row>)
                })
                :
                ''
            }
            {/*          <Table.Header>
          <Table.Row>
          <Table.HeaderCell verticalAlign='middle' colSpan='2'>TOTAL: ${totalPrice.toFixed(2)}</Table.HeaderCell>
          <Table.HeaderCell colSpan='3' textAlign='right'>
          <Button basic color='green' onClick={() => {
          props.actions.editOrder(props.order.order)
          props.actions.deleteOrder(props.order)

          }}><NavLink to='/'>Edit Order</NavLink></Button>
          <Button basic color='green' onClick={() => {props.actions.deleteOrder(props.order)}}>Delete
          Order</Button>
          <Button basic color='green'>Checkout Order</Button>
          </Table.HeaderCell>
          </Table.Row>
          </Table.Header>*/}
          </Table.Body>
        </Table>
        <div className='total'>
          <div>Total: ${order.price.toFixed(2)}</div>
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
                    onClick={()=>{
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