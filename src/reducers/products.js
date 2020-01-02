import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, GET_CATEGORIES } from '../actions/types';

const initialState = {
  items: [],
  item: [],
  categories: [],
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
    case DELETE_PRODUCT:
      const newState = [...state.item.slice(0, action.payload),
        ...state.item.slice(action.payload + 1)
      ]
      return {
        ...state,
        item: newState
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}
