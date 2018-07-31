import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'

function sort (items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

const OrderDetail = (props) => {
  let totalPrice = 0
  console.log(props.order)
  return (
    <div>
      <Table striped>
        <Table.Body>
          {
            props.order ?
              sort(props.order.order).map((item, index) => {
                // this.calculate_total_price(item.price * item.quantity)
                totalPrice += (item.price * item.quantity)
                return (
                  <Table.Row key={index}>
                    <Table.Cell verticalAlign='middle'>{item.name}</Table.Cell>
                    <Table.Cell verticalAlign='middle'>{item.quantity}</Table.Cell>
                    <Table.Cell verticalAlign='middle'>${item.price.toFixed(2)}</Table.Cell>
                    <Table.Cell verticalAlign='middle'>${(item.price * item.quantity).toFixed(2)}</Table.Cell>
                  </Table.Row>)
              })
              :
              ''
          }
          {/*<Table.Header>*/}
          {/*<Table.Row>*/}
          {/*<Table.HeaderCell verticalAlign='middle' colSpan='2'>TOTAL: ${totalPrice.toFixed(2)}</Table.HeaderCell>*/}
          {/*<Table.HeaderCell colSpan='3' textAlign='right'>*/}
          {/*<Button basic color='green' onClick={() => {*/}
          {/*props.actions.editOrder(props.order.order)*/}
          {/*props.actions.deleteOrder(props.order)*/}

          {/*}}><NavLink to='/'>Edit Order</NavLink></Button>*/}
          {/*<Button basic color='green' onClick={() => {props.actions.deleteOrder(props.order)}}>Delete*/}
          {/*Order</Button>*/}
          {/*<Button basic color='green'>Checkout Order</Button>*/}
          {/*</Table.HeaderCell>*/}
          {/*</Table.Row>*/}
          {/*</Table.Header>*/}
        </Table.Body>
      </Table>
      <Segment basic className='total'>
        <div>Total: ${totalPrice.toFixed(2)}</div>
        <div>
          <Button basic color='green' onClick={() => {
            props.actions.editOrder(props.order.order)
            props.actions.deleteOrder(props.order)
          }}><NavLink to='/'>Edit Order</NavLink></Button>
          <Button basic color='green' onClick={() => {props.actions.deleteOrder(props.order)}}>Delete Order</Button>
          <Button basic color='green'>Checkout Order</Button>
        </div>
      </Segment>
    </div>
  )
}

export default OrderDetail