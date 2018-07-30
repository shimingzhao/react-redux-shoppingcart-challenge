import * as types from '../constants/ActionTypes'

const initialState = {
  order: []
}

const orderWithoutItem = (order, item) => order.filter(orderItem => orderItem.custom_id !== item.custom_id)

const itemInOrder = (order, item) => order.filter(orderItem => orderItem.custom_id === item.custom_id)[0]

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_ORDER:
      const orderItem = itemInOrder(state.order, action.payload)
      return {
        ...state,
        order: orderItem === undefined
          ? [...orderWithoutItem(state.order, action.payload), {...action.payload, quantity: 1}]
          : [...orderWithoutItem(state.order, action.payload), {...orderItem, quantity: orderItem.quantity + 1}]
      }

    case types.REMOVE_FROM_ORDER:
      return {
        ...state,
        order: action.payload.quantity === 1
          ? [...orderWithoutItem(state.order, action.payload)]
          : [...orderWithoutItem(state.order, action.payload), {...action.payload, quantity: action.payload.quantity - 1}]
      }

    case types.REMOVE_ALL:
      return {
        order: [...orderWithoutItem(state.order, action.payload)]
      }

    default:
      return state
  }
}

export default orderReducer