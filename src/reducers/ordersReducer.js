import {
  ADD_ORDER,
  DELETE_ORDER,
} from '../constants/ActionTypes'

const initialState = {
  orders: []
}

export default function ordersReducer (state = initialState, action) {
  switch (action.type) {

    case ADD_ORDER:
      return {
        ...state.orders_stuff,
        orders: state.orders_stuff.orders.push(action.payload.order)
      }

    case DELETE_ORDER:
      return{
        ...state.orders_stuff,
        orders: state.orders_stuff.orders.filter(action.payload.order)
      }

    default:
      // ALWAYS have a default case in a reducer
      return state
  }
}