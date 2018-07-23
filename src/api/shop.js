/**
 * Mocking client-server processing
 */
import _products from './products.json'
import axios from 'axios'

const TIMEOUT = 100

const productsData = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return axios.get("https://huddolapi-next.herokuapp.com/v1/challenge")
    // .then(handleErrors)
      .then(json => {
        dispatch(fetchProductsSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}