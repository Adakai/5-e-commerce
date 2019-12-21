import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/addActions';
import styles from './Product.module.scss';

class Product extends Component {
  handleClick = (id) => {
    this.props.addProduct(
      this.props.products[id]
    );
  }

  render() {
    const productItem = this.props.products[
      this.props.match.params.productId - 1
    ];

    return (
      <Fragment>
        <div id={styles.myContainer}>
          <div
            className='card container p-4'
            style={{ maxWidth: '800px' }}
          >
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img src={productItem.img} className='card-img' alt='product' />
              </div>
              <div className='col-md-8'>
                <div id={styles.height} className='ml-3 card- d-flex flex-column align-items-center justify-content-center'>
                  <h5 className='mt-4 card-title font-weight-bold text-center'>{productItem.title}</h5>
                  <p className='card-text mb-2'>{productItem.description}</p>
                  <h6 className='card-text font-weight-bold text-center'>Rating: {productItem.rating} out of 5 stars</h6>
                  <h6 className='card-text font-weight-bold text-center'>Price: {productItem.price}</h6>
                  <div id={styles.width} className='mt-5 d-flex align-items-center justify-content-around'>
                    <Link to='/' type="button" className="btn btn-dark">Go Back</Link>
                    <button onClick={() => this.handleClick(productItem.id)} type="button" className="btn btn-dark">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { addProduct } )(Product);
