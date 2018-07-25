import * as types from '../constants/ActionTypes'

const addItemToOrder = order => ({
  type: types.ADD_TO_ORDER,
  payload: {order}
})

const removeItemFromOrder = order => ({
  type: types.REMOVE_FROM_ORDER,
  payload: {order}
})

const orderWithoutItem = (order, item) => order.order.filter(orderItem => orderItem.name !== item.name)

const itemInOrder = (order, item) => {

  return  order.order.filter(orderItem => orderItem.name === item.name)[0]
}

export const addToOrder = (order, item) => {
  const orderItem = itemInOrder(order, item)
  return orderItem === undefined
    ? [...orderWithoutItem(order, item), {...item, quantity: 1}]
    : [...orderWithoutItem(order, item), {...orderItem, quantity: orderItem.quantity + 1}]
}

export const removeFromOrder = (order, item) => {
  return item.quantity === 1
    ? [...orderWithoutItem(order, item)]
    : [...orderWithoutItem(order, item), {...item, quantity: item.quantity - 1}]
}

export const removeAllFromOrder = (order, item) => {
  return [...orderWithoutItem(order, item)]
}
