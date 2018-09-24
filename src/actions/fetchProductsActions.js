import axios from 'axios'
import * as types from '../constants/ActionTypes'

// const ax = axios.create({
//   baseURL: 'http://localhost:3000'
// })

const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN
})

const fetchProductsSuccess = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: {products},
})

const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: {error}
})

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return axios.get('https://api.myjson.com/bins/10ywg4')
    // return axios.get('products.json')
      .then(json => {
        // dispatch(fetchProductsSuccess(json.data))
        dispatch(fetchProductsSuccess(json.data.products))
        return json.data
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }

}