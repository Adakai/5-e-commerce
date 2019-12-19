import React, { Component } from 'react'
import { fetchProducts } from '../../actions/getActions';
import { connect } from 'react-redux';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItem = this.props.products[this.props.match.params.productId - 1];
    console.log(productItem)
    return (
      <div>
        {productItem.title}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Product);

