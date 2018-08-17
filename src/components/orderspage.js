import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editOrder } from '../actions/orderActions'
import { deleteOrder, checkoutOrder } from '../actions/ordersActions'
import OrderDetail from './orderdetails'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'

function sort (items) {
  return items.sort((a, b) => {
      if (a.checkout_state === true && a.checkout_state === true)
        return a.order_checkout_at < b.order_checkout_at
      else if (a.checkout_state === false && a.checkout_state === false)
        return a.order_placed_at < b.order_placed_at
      else return false
    }
  )
}

function counter (orders) {
  let pending_order = 0
  orders.map(item => {
    item.checkout_state === false
      ? pending_order++
      : pending_order
  })
  return pending_order
}

class Orders extends Component {

  render () {
    const {order, orders, clicker} = this.props
    return (
      <Segment basic>
        <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
          <div><h3>My Orders</h3></div>
          <div style={{alignSelf: 'center'}}>You
            have {orders.length} {orders.length > 1 ? 'orders' : 'order'},
            and {counter(orders)} pending {counter(orders) > 1 ? 'orders' : 'order'}</div>
          <div><Button basic color='green' onClick={(e) => {
            let obj = {
              name: 'menu'
            }
            clicker(e, obj)
          }}>New order</Button></div>
        </div>
        {
          sort(orders).map(temp => {
            return (
              <Segment key={temp.order_id}>
                <Grid style={{fontWeight: 'bold', color: 'green', paddingTop: '10px', paddingBottom: '10px'}}>
                  <Grid.Column width='8'>Order ID: {temp.order_id}</Grid.Column>
                  <Grid.Column width='8' textAlign='right'>
                    {
                      temp.checkout_state === false
                        ? `Order placed on: ${temp.order_placed_at.substring(0, 24)}`
                        : `Order checkout on: ${temp.order_checkout_at.substring(0, 24)}`
                    }
                  </Grid.Column>
                </Grid>
                <OrderDetail clicker={clicker} order={temp} actions={this.props.actions}/>
              </Segment>
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
  actions: bindActionCreators({editOrder, deleteOrder, checkoutOrder}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
