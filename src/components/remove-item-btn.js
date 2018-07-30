import React from 'react'

export default function RemoveItemButton (props) {

  return <button
    onClick={() => props.removeFromOrder(props.orderItem)}
  >Remove</button>
}