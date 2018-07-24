import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import productReducer from '../reducers/productReducer'
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//   orders: reducer,
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(productReducer, composeEnhancers(applyMiddleware(thunk)))

export default store