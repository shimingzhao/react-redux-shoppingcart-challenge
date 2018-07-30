import React, { Component } from 'react'
import ProductListing from './product-listing'
import Order from './order'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProductsActions'
import { addToOrder, removeFromOrder, removeAllFromOrder } from '../actions/orderActions'

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
        <h2>Home Page</h2>
        {products.map(res => {
            return (
              <div key={res.id}>
                <h3>{res.id}: {res.name}</h3>
                <ProductListing items={res.menu} store_name={res.name}/>
              </div>)
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
  actions: bindActionCreators({fetchProducts, addToOrder, removeFromOrder, removeAllFromOrder}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

