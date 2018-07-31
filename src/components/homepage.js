import React, { Component } from 'react'
import ProductListing from './product-listing'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProductsActions'
import { addToOrder, removeFromOrder, removeAllFromOrder, setOrderInitialState } from '../actions/orderActions'
import { placeOrder, deleteOrder } from "../actions/ordersActions";
import Order from './order'
import { Grid, Segment } from 'semantic-ui-react'

class HomePage extends Component {

  componentDidMount () {
    // this.props.dispatch.loadAllProduces
    this.props.actions.fetchProducts()
    // this.props.fetchProducts
  }

  render () {

    const {error, loading, products, order} = this.props

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Order order={order} actions={this.props.actions} />
        {products.map(res => {
            return (
              <Segment basic key={res.id}>
                <h3>{res.id}: {res.name}</h3>
                <ProductListing items={res.menu} store_name={res.name}/>
              </Segment>)
          }
        )}
        <Order order={order} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    loading: state.products_stuff.loading,
    error: state.products_stuff.error,
    order: state.order_stuff.order,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchProducts, addToOrder, removeFromOrder, removeAllFromOrder, setOrderInitialState, placeOrder}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

