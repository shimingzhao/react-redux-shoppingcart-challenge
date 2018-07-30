import * as types from '../constants/ActionTypes'

export const placeOrder = (order) => dispatch => ({
  type: types.ADD_ORDER,
  payload: order
})

export const deleteOrder = (order) => dispatch => ({
  type: types.DELETE_ORDER,
  payload: order
})





