import React from 'react'
import { Button } from "reactstrap";

export default function RemoveItemButton (props) {

  return <Button
    onClick={() => props.removeFromOrder(props.orderItem)}
  >Remove</Button>
}