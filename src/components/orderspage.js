import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editOrder } from '../actions/orderActions'
import { deleteOrder, checkoutOrder } from '../actions/ordersActions'
import OrderDetail from './orderdetails'
import { Grid, Segment, Table, Button } from 'semantic-ui-react'

function sort (items) {
  return items.sort((a, b) => a.order_date < b.order_date)
}

class Orders extends Component {

  render () {
    const {order, orders, clicker} = this.props
    return (
      <Segment basic>
        <div style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between'}}>
          <div><h3>My Orders</h3></div>
          <div style={{alignSelf: 'center'}}>You have {orders.length} orders.</div>
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
                <Grid style={{fontWeight: 'bold', color: 'grey', paddingTop: '10px', paddingBottom: '10px'}}>
                  <Grid.Column width='8'>Order ID: {temp.order_id}</Grid.Column>
                  <Grid.Column width='8' textAlign='right'>Order Date: {temp.order_date.substring(0, 24)}</Grid.Column>
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
