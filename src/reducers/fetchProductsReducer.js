import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants/ActionTypes';
import createId from '../constants/generateId'

const initialState = {
  products: [],
  loading: false,
  error: null
};

export default function fetchProductsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:

      let temp = {
        ...state,
        loading: false,
        products: action.payload.products
      };
      temp.products.forEach((v, i) => {
        v.menu.forEach((v_inner, i_inner) => {
          // console.log(v_inner);
          v_inner['custom_id'] = v.id + '-' + createId(8 ,10);
        });
      });

      return temp;

      // return {
      //   ...state,
      //   loading: false,
      //   products: action.payload.products
      // };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: []
      };

    default:
      return state;
  }
}