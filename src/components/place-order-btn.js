import React from 'react'

export default function PlaceOrderButton (props) {
  return (
    <button onClick={() => {
      props.placeOrderAction(this.props.order, this.props.totalPrice)
      props.setOrderInitAction()
    }}>
      Place Order
    </button>
  )
}