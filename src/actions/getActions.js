import { GET_PRODUCTS, GET_CATEGORIES } from './types';

export const fetchProducts = () => dispatch => {
  fetch(`https://my-json-server.typicode.com/tdmichaelis/typicode/products`)
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    );
};

export const fetchCategories = () => dispatch => {
  fetch(`https://my-json-server.typicode.com/tdmichaelis/typicode/categories`)
    .then(res => res.json())
    .then(categories =>
      dispatch({
        type: GET_CATEGORIES,
        payload: categories
      })
    );
};

