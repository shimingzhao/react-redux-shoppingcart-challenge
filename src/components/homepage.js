import React, { Component } from 'react'
import ProductListing from './product-listing'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import PlaceOrderBtn from './place-order-btn'
import { fetchProducts, addNewOrder } from '../actions/productActions'

class HomePage extends Component {

  componentDidMount () {
    // this.props.dispatch.loadAllProduces
    this.props.actions.fetchProducts()
    // this.props.fetchProducts
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
                <ProductListing items={res.menu} store_name={res.name} orders={orders}/>
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
  orders: state.orders,
})

/*const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchProducts,
    addNewOrder,
  },
  dispatch,
)*/

/*const mapDispatchToProps = {
  fetchProducts, // will be wrapped into a dispatch call
  addNewOrder, // will be wrapped into a dispatch call
};*/

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchProducts, addNewOrder}, dispatch),
  dispatch: dispatch
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

