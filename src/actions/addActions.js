import { ADD_PRODUCT } from './types';

export const addProduct = (item) => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: item
  });
};
