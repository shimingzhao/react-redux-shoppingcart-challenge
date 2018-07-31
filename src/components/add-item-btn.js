import React from 'react'
import { Button } from "reactstrap";

export default function AddItemButton (props) {

  return (
    <Button
      onClick={() => props.addToOrder(props.item)}>
      Add to order
      ({(props.orderItem && props.orderItem.quantity) || 0})
    </Button>
  )
}