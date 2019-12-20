import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/getActions';
import styles from './Products.module.scss';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map(product => (
      <Fragment key={product.id}>
        <div id={styles.container} className='card' style={{ width: '18rem' }}>
          <img id={styles.imgSize} src={product.img} className='card-img-top' alt='product' />
          <div className='mt-3 card-body d-flex flex-column justify-content-center align-items-center'>
            <h5 className='card-title'>{product.title}</h5>
            <Link to={'/product/' + product.id} className='btn btn-dark'>
              View Product
            </Link>
          </div>
        </div>
      </Fragment>
    ));

    return (
      <div id={styles.myMargin} className='container d-flex flex-wrap justify-content-center align-items-center'>
        {productItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Products);
