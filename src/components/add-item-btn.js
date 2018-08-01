import React from 'react'
import { Button } from 'semantic-ui-react';

export default function AddItemButton (props) {

  return (
    <Button basic color='green'
      onClick={() => props.addToOrder(props.item)}>
      Add
      ({(props.orderItem && props.orderItem.quantity) || 0})
    </Button>
  )
}