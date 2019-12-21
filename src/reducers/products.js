import { GET_PRODUCTS, ADD_PRODUCT } from '../actions/types';

const initialState = {
  items: [],
  item: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        item: [...state.item, action.payload]
      }
    default:
      return state;
  }
}
