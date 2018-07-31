import React from 'react'
import { Button } from 'semantic-ui-react';

export default function RemoveItemButton (props) {

  return <Button basic color='red'
    onClick={() => props.removeFromOrder(props.orderItem)}
  >Remove</Button>
}