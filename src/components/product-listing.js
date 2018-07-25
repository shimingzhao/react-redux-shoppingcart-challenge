import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item'
// import { addToOrder, removeFromOrder } from '../actions/orderActions'
// import { bindActionCreators } from 'redux/index'

const ProductListing = (props) => {
  console.log(props.order)
  return (
    <div className='product-listing'>
      {
        props.items.map((item, index) =>
          <ProductListItem
            item={item}
            key={index}
            addToOrder={props.addToOrder}
            removeFromOrder={props.removeFromOrder}
            order={props.order}
            orderItem={props.order.filter(orderItem => orderItem.name === item.name)[0]}
          />)
      }
    </div>
  )
}

const mapStateToProps = state => {

  return {
    order: state.order_stuff.order,
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({addToOrder, removeFromOrder}, dispatch),
//   dispatch: dispatch
// })

function mapDispatchToProps (dispatch) {

  return {
    addToOrder: (item) => {
      dispatch({type: 'ADD_TO_ORDER', payload: item})
    },
    removeFromOrder: (item) => {
      dispatch({type: 'REMOVE_FROM_ORDER', payload: item})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
