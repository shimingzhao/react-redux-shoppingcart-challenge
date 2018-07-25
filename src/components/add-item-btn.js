import React from 'react'

export default function AddItemButton (props) {
  console.log(props.item)
  return (
    <button
      onClick={() => props.addToOrder(props.item)}>
      Add to order
      ({(props.orderItem && props.orderItem.quantity) || 0})
    </button>
  )
}