import React, { Component } from 'react'
import ProductListing from './product-listing'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import PlaceOrderBtn from './place-order-btn'
import { fetchProducts } from '../actions/productActions'
import axios from 'axios/index'
import _products from './products.json'


class HomePage extends Component {

  componentDidMount () {
    // this.props.dispatch.loadAllProduces
    this.props.fetchProducts
    console.log(_products)
    console.log(_products.type)
  }

  render () {

    const { error, loading, products, orders } = this.props

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Home Page</h2>
        {products.map(res => {
            return (
              <div key={res.id}>
                <h3>{res.id}: {res.name}</h3>
                {/*<ProductListing items={res.menu} store_name={res.name}/>*/}
              </div>)
          }
        )}
        {/*<div>*/}
          {/*<PlaceOrderBtn order={this.props.order} addOrder={this.props.addNewOrder}/>*/}
        {/*</div>*/}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  products: state.products,
  loading: state.loading,
  error: state.error,
  orders: state.orders
})

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({loadAllProduces, addNewOrder}, dispatch),
//   dispatch: dispatch
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => {
//       dispatch({type: 'ADD', payload: item})
//     },
//     removeFromCart: (item) => {
//       dispatch({type: 'REMOVE', payload: item})
//     }
//   }
// }

export default connect(mapStateToProps, fetchProducts)(HomePage)

