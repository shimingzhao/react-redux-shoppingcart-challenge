import { addToOrder, removeFromOrder, removeAllFromOrder } from '../actions/orderActions'

const initialState = {
  order: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return addToOrder(state, action.payload)

    case 'REMOVE_FROM_ORDER':
      return removeFromOrder(state, action.payload)

    case 'REMOVE_ALL':
      return removeAllFromOrder(state, action.payload)

    default:
      return state
  }
}

export default orderReducer