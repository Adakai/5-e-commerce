import React, { Fragment } from '../../../node_modules/react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Fragment>
      <div id={styles.backgroundColor} className='navbar navbar-expand navbar-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Swiftys
          </a>
          <div className='' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  <i className="fas fa-home"></i>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
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
