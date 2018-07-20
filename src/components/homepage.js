import React, { Component } from 'react'
import ProductListing from './product-listing'
import { connect } from 'react-redux'
import PlaceOrderBtn from './place-order-btn'
import { fetchProducts } from '../actions/productActions'

class HomePage extends Component {

  componentDidMount () {
    this.props.dispatch(fetchProducts())
  }

  render () {
    const {error, loading, products, orders} = this.props
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
        {/*<div>*/}
          {/*<PlaceOrderBtn order={this.props.order} addOrder={this.props.addOrder}/>*/}
        {/*</div>*/}
      </div>
    )
  }
}

const mapStateToProps = state =>({
  products: state.products,
  loading: state.loading,
  error: state.error
})


// function mapDispatchToProps (dispatch) {
//   return {
//     addOrder: (order) => {
//       dispatch({type: 'ADD_ORDER', payload: order})
//     }
//   }
// }

export default connect(mapStateToProps)(HomePage)

