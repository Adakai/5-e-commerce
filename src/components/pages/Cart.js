import React, { Component, Fragment } from 'react';
// import { addProduct } from '../../actions/addActions';
import { connect } from 'react-redux';

class Cart extends Component {

  render() {
    let items = this.props.products.item.forEach(item => <img src={item.img} />)

    console.log(this.props.products.item[0])
    return (
    <div>
      {items}
    </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, null)(Cart);
