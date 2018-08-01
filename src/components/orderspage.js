import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editOrder } from '../actions/orderActions'
import { deleteOrder } from '../actions/ordersActions'
import OrderDetail from './orderdetails'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'

function sort (items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

class Orders extends Component {

  render () {

    const {order, orders, clicker} = this.props
    return (
      <Segment basic>
        <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
          <div><h3>My Orders</h3></div>
          <div><Button basic color='green' onClick={(e) => {
            let obj = {
              name: 'menu'
            }
            clicker(e, obj)
          }}>New order</Button></div>
        </div>
        {
          orders.map(temp => {
            return (
              <Table key={temp.order_id}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan='5'>Order ID: {temp.order_id}</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <OrderDetail clicker={clicker} order={temp} actions={this.props.actions}/>
              </Table>
            )
          })
        }
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order_stuff.order,
    orders: state.orders_stuff.orders,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({editOrder, deleteOrder}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
