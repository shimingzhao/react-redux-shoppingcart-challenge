import React from 'react'
import CheckoutPopup from './checkout'

function sort(items) {
  return items.sort((a, b) => a.custom_id < b.custom_id)
}

const Order = (props) => {
  let totalPrice = 0
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
            sort(props.order).map((item, index) => {
              // this.calculate_total_price(item.price * item.quantity)
              totalPrice += (item.price * item.quantity)
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => {
                      props.actions.addToOrder(item)
                      // this.calculate_total_price(item.price)
                      totalPrice += item.price
                    }}>+
                    </button>
                    <button onClick={() => {
                      props.actions.removeFromOrder(item)
                      // this.calculate_total_price(-(item.price))
                      totalPrice -= item.price
                    }}>-
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        props.actions.removeAllFromOrder(item)
                        // this.calculate_total_price(-(item.price * item.quantity))
                        totalPrice -= (item.price * item.quantity)
                      }}
                    >
                      Remove all from cart
                    </button>
                  </td>
                </tr>)
            })
            :
            ''
        }
        </tbody>
      </table>
      <div className='total'>
        <div>Total: ${totalPrice.toFixed(2)}</div>

        <button onClick={() => {
          props.actions.placeOrder(props.order)
          console.log(typeof props.order)
        }}>Place order</button>


        {/*<div><CheckoutPopup cart={this.props.cart} total={totalPrice}/></div>*/}
      </div>
    </div>
  )
}

export default Order