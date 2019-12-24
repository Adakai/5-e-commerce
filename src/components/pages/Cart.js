import React, { Component, Fragment } from 'react';
import styles from './Cart.module.scss';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/deleteAction'

class Cart extends Component {
  handleClickDelete = (id) => {
    let productToDelete = this.props.products.map(item => { return item.id }).indexOf(id)
    this.props.deleteProduct(productToDelete)
  }
  render() {
    console.log(this.props.products)
    let items = this.props.products.map(item => (
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
                    <button className='btn btn-dark'>Update</button>
                    <button onClick={() => this.handleClickDelete(item.id)} className='btn btn-dark'>Delete Item</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Fragment>
    ));
    return (
    <div>
      {items}
      <div className='d-flex justify-content-center'>
        <button className='btn btn-dark'>Check Out</button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.item
});

export default connect(mapStateToProps, { deleteProduct })(Cart);
