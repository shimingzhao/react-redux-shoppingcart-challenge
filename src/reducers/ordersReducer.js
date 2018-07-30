import * as types from '../constants/ActionTypes'
import uuid from 'uuid'

const initialState = {
  orders: []
}

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
        orders: []
      }

    default:
      // ALWAYS have a default case in a reducer
      return state
  }
}