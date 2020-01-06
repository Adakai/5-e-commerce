import { ADD_PRODUCT, ADD_USER } from './types';

export const addProduct = (item) => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: item
  });
};

export const addUser = (user) => dispatch => {
  dispatch({
    type: ADD_USER,
    payload: user
  });
}