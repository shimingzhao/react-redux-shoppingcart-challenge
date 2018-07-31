import React from 'react'
import AddItemBtn from './add-item-btn'
import RemoveItemBtn from './remove-item-btn'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

const ProductListItem = (props) => {

  const item = props.item
  // console.log(props.orderItem)
  return (
    <div>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {/*<h3>{item.custom_id}</h3>*/}
        <CardSubtitle>${item.price.toFixed(2)}</CardSubtitle>
        <div>
          <AddItemBtn
            orderItem={props.orderItem}
            item={props.item}
            order={props.order}
            addToOrder={props.addToOrder}
          />
          &nbsp;&nbsp;
          {
            props.orderItem !== undefined
              ? <RemoveItemBtn
                orderItem={props.orderItem}
                item={props.item}
                removeFromOrder={props.removeFromOrder}
              />
              : null
          }
        </div>
      </CardBody>
    </div>
  )
}

export default ProductListItem