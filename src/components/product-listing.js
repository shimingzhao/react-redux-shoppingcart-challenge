import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item'
import { addToOrder, removeFromOrder } from '../actions/orderActions'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
// import { bindActionCreators } from 'redux/index'

const ProductListing = (props) => {
  return (
    <div className="mb-lg-3">
      {
        props.items.map((item, index) =>
          <ProductListItem
            item={item}
            key={index}
            addToOrder={props.addToOrder}
            removeFromOrder={props.removeFromOrder}
            order={props.items}
            orderItem={props.order.filter(orderItem => orderItem.custom_id === item.custom_id)[0]}
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


export default connect(mapStateToProps, {addToOrder, removeFromOrder})(ProductListing)
