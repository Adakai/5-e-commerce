import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Products from './components/product/Products';
import Product from './components/product/Product';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Footer from './components/layout/Footer';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/product/:productId' component={Product}></Route>
        </Switch>
        <Footer />
      </Router>
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
