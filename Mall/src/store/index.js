import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from "redux-logger";
import homeReducer from './homeReducer'
import userReducer from './userReducer'
import searchReducer from './searchReducer'
import productListReducer from './productListReducer'


const store = createStore(
  combineReducers({
    home: homeReducer,
    user: userReducer,
    search: searchReducer,
    productList: productListReducer
  }),
  //applyMiddleware(logger, thunk)
  applyMiddleware(thunk)
)
export default store