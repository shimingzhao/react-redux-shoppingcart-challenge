import React from 'react'
import {NavLink} from 'react-router-dom'

function sort (items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

const OrderDetail = (props) => {
  let totalPrice = 0
  console.log(props.order)
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {
          props.order ?
            sort(props.order.order).map((item, index) => {
              // this.calculate_total_price(item.price * item.quantity)
              totalPrice += (item.price * item.quantity)
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  {/*<td>*/}
                    {/*<button onClick={() => {*/}
                      {/*props.actions.addToOrder(item)*/}
                      {/*// this.calculate_total_price(item.price)*/}
                      {/*totalPrice += item.price*/}
                    {/*}}>+*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                      {/*props.actions.removeFromOrder(item)*/}
                      {/*// this.calculate_total_price(-(item.price))*/}
                      {/*totalPrice -= item.price*/}
                    {/*}}>-*/}
                    {/*</button>*/}
                  {/*</td>*/}
                  {/*<td>*/}
                    {/*<button*/}
                      {/*onClick={() => {*/}
                        {/*props.actions.removeAllFromOrder(item)*/}
                        {/*// this.calculate_total_price(-(item.price * item.quantity))*/}
                        {/*totalPrice -= (item.price * item.quantity)*/}
                      {/*}}*/}
                    {/*>*/}
                      {/*Remove all from cart*/}
                    {/*</button>*/}
                  {/*</td>*/}
                </tr>)
            })
            :
            ''
        }
        </tbody>
      </table>
      <div className='total'>
        <div>Total: ${totalPrice.toFixed(2)}</div>
        <div>
          <button onClick={() => {
            props.actions.editOrder(props.order.order)
            props.actions.deleteOrder(props.order)

          }}><NavLink to='/'>Edit Order</NavLink></button>
          <button onClick={() => {props.actions.deleteOrder(props.order)}}>Delete Order</button>
          <button>Checkout Order</button>
        </div>

      </div>
    </div>
  )
}

export default OrderDetail