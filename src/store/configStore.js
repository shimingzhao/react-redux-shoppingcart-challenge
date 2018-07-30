import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import products_reducer from '../reducers/fetchProductsReducer'
import orders_reducer from '../reducers/ordersReducer';
import order_reducer from '../reducers/orderReducer'
import thunk from 'redux-thunk'

const initialState = {}

const rootReducer = combineReducers({
  products_stuff: products_reducer,
  orders_stuff: orders_reducer,
  order_stuff: order_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)))

export default store