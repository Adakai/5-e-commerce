import React, { Fragment } from '../../../node_modules/react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = () => {
  return (
    <Fragment>
      <div
        id={styles.backgroundColor}
        className='navbar navbar-expand navbar-light'
      >
        <div className='container'>
          <Link id={styles.bold} className='navbar-brand' to='/'>
            <img id={styles.imgSize} src={logo} alt='Swift Commerce' />
          </Link>
          <div className='' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
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
                  <i className='fas fa-user'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
