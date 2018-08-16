import * as types from '../constants/ActionTypes'

export const placeOrder = (order, price) => dispatch => {
  dispatch({
    type: types.PLACE_ORDER,
    payload: {order, price}
  })
}

export const deleteOrder = (order) => dispatch => {
  dispatch({
    type: types.DELETE_ORDER,
    payload: order
  })
}

export const checkoutOrder = (order) => dispatch =>{
  dispatch({
    type: types.CHECKOUT_ORDER,
    payload: order
  })
}






