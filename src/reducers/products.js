import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types';

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
    case DELETE_PRODUCT:
      const newState = [...state.item.slice(0, action.payload),
        ...state.item.slice(action.payload + 1)
      ]
      console.log(newState)
      return {
        ...state,
        item: newState
      };
    default:
      return state;
  }
}
