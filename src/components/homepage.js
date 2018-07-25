import React, { Component } from 'react'
import ProductListing from './product-listing'
import Order from './order'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProductsActions'

class HomePage extends Component {

  componentDidMount () {
    // this.props.dispatch.loadAllProduces
    this.props.actions.fetchProducts()
    // this.props.fetchProducts
  }

  render () {

    const {error, loading, products} = this.props

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
        <Order />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    loading: state.products_stuff.loading,
    error: state.products_stuff.error,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchProducts}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

