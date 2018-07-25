import * as types from '../constants/ActionTypes'

const addItemToOrder = order => ({
  type: types.ADD_TO_ORDER,
  payload: {order}
})

const removeItemFromOrder = order =>({
  type: types.REMOVE_FROM_ORDER,
  payload: {order}
})

const orderWithoutItem = (order, item) => order.filter(orderItem => orderItem.name !== item.name)

const itemInOrder = (order, item) => order.filter(orderItem => orderItem.name === item.name)[0]

const addItem = (order, item) => {
  const orderItem = itemInOrder(order, item)
  return orderItem === undefined
    ? [...orderWithoutItem(order, item), {...item, quantity: 1}]
    : [...orderWithoutItem(order, item), {...orderItem, quantity: orderItem.quantity + 1}]
}

const removeItem = (order, item) => {
  return item.quantity === 1
    ? [...orderWithoutItem(order, item)]
    : [...orderWithoutItem(order, item), {...item, quantity: item.quantity - 1}]
}

const removeAllItems = (order, item) => {
  return [...orderWithoutItem(order, item)]
}

export const addToOrder()