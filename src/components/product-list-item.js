import React from 'react'
import AddItemBtn from './add-item-btn'
import RemoveItemBtn from './remove-item-btn'
import { Button, Card, Image } from 'semantic-ui-react'

const ProductListItem = (props) => {
  // console.log(props.item)
  const item = props.item
  // console.log(item)
  // console.log(props.orderItem)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        {/*<h3>{item.custom_id}</h3>*/}
        <Card.Description>${item.price.toFixed(2)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <AddItemBtn
            orderItem={props.orderItem}
            item={props.item}
            order={props.order}
            addToOrder={props.addToOrder}
          />
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
      </Card.Content>
    </Card>
  )
}

export default ProductListItem