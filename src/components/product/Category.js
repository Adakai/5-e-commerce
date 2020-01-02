import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../store';
import styles from './Category.module.scss';

export class Category extends Component {
 
  render() {
    const categoryToMatch = this.props.match.params.categoryId;
    const productCategory = store.getState().products.items
    const categories = productCategory.filter(item => 
      item.category === categoryToMatch
    );
    const categoryItems = categories.map(category => (
      <Fragment key={category.id}>
        <div id={styles.container} className='card' style={{ width: '18rem' }}>
          <img id={styles.imgSize} src={category.img} className='card-img-top' alt='product' />
          <div className='mt-3 card-body d-flex flex-column justify-content-center align-items-center'>
            <h5 className='card-title'>{category.title}</h5>
            <Link to={'/product/' + category.id} className='btn btn-dark'>
              View Product
            </Link>
          </div>
        </div>
      </Fragment>
    ));

    return (
      <Fragment>
        <div className='mt-5 mb-5 container d-flex flex-wrap justify-content-center align-items-center'>
          {categoryItems}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, null)(Category);
