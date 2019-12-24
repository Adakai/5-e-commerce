import { DELETE_PRODUCT } from './types';

export const deleteProduct = (id) => dispatch => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  });
};