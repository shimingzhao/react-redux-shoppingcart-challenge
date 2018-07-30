import * as types from '../constants/ActionTypes'
import uuid from 'uuid'

const initialState = {
  orders: []
}

const ordersWithoutOrder = (orders, order) => orders.filter(ordersItem => ordersItem.order_id !== order.order_id)

export default function ordersReducer (state = initialState, action) {
  switch (action.type) {

    case types.PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, {...action.payload, order_id: uuid()}]
      }

    case types.DELETE_ORDER:
      return{
        ...state,
        orders: [...ordersWithoutOrder(state.orders, action.payload)]
      }

    default:
      // ALWAYS have a default case in a reducer
      return state
  }
}