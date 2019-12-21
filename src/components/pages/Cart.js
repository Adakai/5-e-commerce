import React, { Component, Fragment } from 'react';
// import { addProduct } from '../../actions/addActions';
import styles from '../product/Product';
import { connect } from 'react-redux';
// import store from '../../store'

class Cart extends Component {
  render() {
    console.log(this.props.products.item);
    let items = this.props.products.item.map(item => (
      <Fragment key={item.id}>
        <div className='mt-5 mb-5' id={styles.myContainer}>
          <div
            className='card container p-4'
            style={{ maxWidth: '800px' }}
          >
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img src={item.img} className='card-img' alt='product' />
              </div>
              <div className='col-md-8'>
                <div id={styles.height} className='ml-3 card- d-flex flex-column align-items-center justify-content-center'>
                  <h5 className='mt-4 card-title font-weight-bold text-center'>{item.title}</h5>
                  <h6 className='card-text font-weight-bold text-center'>Price: {item.price}</h6>
                  <div id={styles.width} className='mt-5 d-flex align-items-center justify-content-around'>
                    <button className='btn-dark'>Delete Item</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    ));
    console.log(items);
    return <div>{items}</div>;
  }
}

// store.subscribe(() => {
//   console.log(store.getState())
// });

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, null)(Cart);
