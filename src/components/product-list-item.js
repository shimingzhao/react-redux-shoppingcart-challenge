import React, { Component } from 'react'
import AddItemBtn from './add-item-btn'
import RemoveItemBtn from './remove-item-btn'

// class ProductListItem extends Component {
//   // constructor (props) {
//   //   super(props)
//   //   state = {
//   //     // item_name: '',
//   //     // item_price: 0,
//   //     // item_store_name: props.storeName,
//   //   }
//   // }
//
//   render () {
//     return (
//       <div className='product-list-item'>
//         <h3>{props.item.itemid}-{props.item.name}</h3>
//         <div>${props.item.price.toFixed(2)}</div>
//         <div>
//           <AddItemBtn
//             orderItem={props.orderItem}
//             item={props.item}
//             addToOrder={props.addToOrder}
//           />
//           {
//             props.cartItem
//               ? <RemoveItemBtn
//                 orderItem={props.orderItem}
//                 item={props.item}
//                 removeFromOrder={props.removeFromOrder}
//               />
//               : null
//           }
//         </div>
//       </div>
//     )
//   }
// }
//
// function mapStateToProps (state) {
//   return {
//     order_detail: state.orders.order
//   }
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     addToOrder: (item) => {
//       dispatch({type: 'ADD_ITEM', payload: item})
//     },
//     removeFromOrder: (item) => {
//       dispatch({type: 'REMOVE_ITEM', payload: item})
//     },
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)

const ProductListItem = (props) => {
  console.log(props.orderItem)
  return (
    <div className='product-list-item'>
      <h3>{props.item.name}</h3>
      <div>${props.item.price.toFixed(2)}</div>
      <div>
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
    </div>
  )
}

export default ProductListItem