import { combineReducers } from 'redux'
import getProducts from './getProducts'

export default combineReducers({
  products: getProducts
});