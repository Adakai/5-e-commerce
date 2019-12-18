import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/getActions';

class Products extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    
    const productItems = this.props.products.map(product => <div key={product.id}>{product.title}</div>);
    return (
      <div>
        <h1>products</h1>
        {productItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Products);
