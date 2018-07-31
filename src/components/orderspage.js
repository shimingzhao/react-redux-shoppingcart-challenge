import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editOrder } from '../actions/orderActions'
import { deleteOrder } from '../actions/ordersActions'
import OrderDetail from './orderdetails'

function sort(items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

class Orders extends Component {

  render () {

    const {order, orders} = this.props
    return (
      <div>
        <h3>My Orders</h3>
        {
          orders.map(temp => {
            return (
              <div key={temp.order_id}>
                <div>Order ID: {temp.order_id}</div>
                <OrderDetail order={temp} actions={this.props.actions} />
              </div>
            )
          })
        }
      </div>
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
