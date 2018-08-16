import * as types from '../constants/ActionTypes'
import createId from '../constants/generateId'

const initialState = {
  orders: []
}

const ordersWithoutOrder = (orders, order) => orders.filter(ordersItem => ordersItem.order_id !== order.order_id)

const ordersReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case types.PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, {...action.payload, order_id: createId(8, 10), checkout_state: false, order_date: Date()}]
      }

    case types.DELETE_ORDER:
      return{
        ...state,
        orders: [...ordersWithoutOrder(state.orders, action.payload)]
      }

    case types.CHECKOUT_ORDER:
      return{
        ...state,
        orders: [...ordersWithoutOrder(state.orders, action.payload), {...action.payload, checkout_state: true}]
      }

    default:
      // ALWAYS have a default case in a reducer
      return state
  }
}

export default ordersReducer