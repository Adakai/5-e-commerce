import { GET_PRODUCTS } from './types';

export const fetchProducts = ()  => dispatch => {
  fetch(`https://my-json-server.typicode.com/tdmichaelis/typicode/products`)
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    );
}
