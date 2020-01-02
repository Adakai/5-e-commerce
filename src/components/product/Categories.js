import React, { Component } from 'react';
import { fetchCategories } from '../../actions/getActions';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import { connect } from 'react-redux';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const options = this.props.products.map((category, idx) => (
      <Link to={'/category/' + category} key={idx} className='dropdown-item' type='button'>
        {category}
      </Link>
    ));
    return (
      <div id={styles.margin} className='btn-group d-flex justify-content-center'>
        <button
          type='button'
          className='btn btn-dark dropdown-toggle'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Categories
        </button>
        <div className='dropdown-menu'>{options}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.categories
});

export default connect(mapStateToProps, { fetchCategories })(Categories);
