// import React, { Component, Fragment } from 'react';
// import styles from './Search.module.scss';

// export default class Search extends Component {
//   state = {
//     text: ''
//   };
  
//   // searchProduct = (product) => {

//   // }

//   onSubmit = e => {
//     e.preventDefault();
//     if (this.state.text === '') {
//       alert('enter text') //TODO: Make an alert.
//     } else {
//       this.searchProduct(this.state.text);
//       this.setState({ text: '' });
//     }
//   };

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     return (
//       <Fragment>
//         <form
//           onSubmit={this.onSubmit}
//           id={styles.inputMarginTop}
//           className='input-group mb-3'
//         >
//           <div className={styles.container}>
//             <input
//               type='text'
//               name='text'
//               className='form-control'
//               value={this.state.text}
//               onChange={this.onChange}
//               placeholder='Search Product'
//             />
//             <div className='input-group-append'>
//               <button className='btn btn-secondary' type='button'>
//                 Button
//               </button>
//             </div>
//           </div>
//         </form>
//       </Fragment>
//     );
//   }
// }
