import React, { Fragment } from '../../../node_modules/react';
import styles from './Navbar.module.scss';
import logo from '../../logo.png'

const Navbar = () => {
  return (
    <Fragment>
      <div id={styles.backgroundColor} className='navbar navbar-expand navbar-light'>
        <div className='container'>
          <a id={styles.bold} className='navbar-brand' href='/'>
            <img id={styles.imgSize} src={logo} alt="Swift Commerce"/>
          </a>
          <div className='' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
