import React, { Component, Fragment } from '../../../node_modules/react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { connect } from 'react-redux';
import logo from '../../logo.png';

class Navbar extends Component {
  componentDidMount() {
    console.log(this.props.products)
  }
  
  render () {
    return (
      <Fragment>
        <div id={styles.backgroundColor} className='navbar navbar-expand navbar-light fixed-top'>
          <div className='container'>
            <Link id={styles.bold} className='navbar-brand' to='/'>
              <img id={styles.imgSize} src={logo} alt='Swift Commerce' />
            </Link>
            <div className='' id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    <i className='fas fa-home'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/cart'>
                    <i className='fas fa-shopping-cart'></i>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    {this.props.products !== null ? this.props.products : <i className='fas fa-user'></i>}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  products: state.products.user
});

export default connect(mapStateToProps, null)(Navbar);
