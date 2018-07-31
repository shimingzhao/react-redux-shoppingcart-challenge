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
        orders: [...state.orders, {...action.payload, order_id: createId(8, 10)}]
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

export default ordersReducer