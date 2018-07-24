import axios from 'axios'


export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const ADD_ORDER = 'ADD_ORDER'

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

const addOrder = orders => ({
  type: ADD_ORDER,
  payload: {orders}
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

/*export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("https://huddolapi-next.herokuapp.com/v1/challenge")
      .then(handleErrors)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}*/

// Handle HTTP errors since fetch won't.
/*function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}*/

export const addNewOrder = (orders) => {
  return (addOrder(orders))
}

