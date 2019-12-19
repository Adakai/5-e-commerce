import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar';
import { Provider } from 'react-redux'
import store from './store';
import Products from './components/product/Products';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;




// REDUX

// import { createStore } from 'redux';

// const initialState = {
  //   result: 1,
  //   lastValues: []
  // }

  // const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'ADD':
  //       state = {
  //         ...state,
  //         result: state.result + action.payload,
  //         lastValues: [...state.lastValues, action.payload]
  //       };
  //       break;
  //     case 'SUBTRACT':
  //       state = {
  //         ...state,
  //         result: state.result - action.payload,
  //         lastValues: [...state.lastValues, action.payload]
  //       };
  //       break;
  //   }
  //   return state;
  // };

  // const store = createStore(reducer);

  // store.subscribe(() => {
  //   console.log('store updated!', store.getState());
  // });

  // store.dispatch({
  //   type: 'ADD',
  //   payload: 10
  // });

  // store.dispatch({
  //   type: 'ADD',
  //   payload: 20
  // });

  // store.dispatch({
  //   type: 'SUBTRACT',
  //   payload: 4
  // });
  
