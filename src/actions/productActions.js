import axios from 'axios'

const orderWithoutItem = (order, item) => order.filter(orderItem => orderItem.name !== item.name)

const itemInOrder = (order, item) => order.filter(orderItem => orderItem.name === item.name)[0]

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const ADD_TO_ORDER = 'ADD_TO_ORDER'
export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'

const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
})

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {products}
})

const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {error}
})

const addOrder = order => ({
  type: ADD_ORDER,
  payload: {order}
})

const deleteOrder = order =>({
  type: DELETE_ORDER,
  payload: {order}
})




export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
    // .then(handleErrors)
      .then(json => {
        dispatch(fetchProductsSuccess(json.data))
        return json.data
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

export const addNewOrder = (order) => {
  return (addOrder(order))
}

export const addToOrder = (order, item) => {
  const orderItem = itemInOrder(order, item)
  return dispatch =>
  orderItem === undefined
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

