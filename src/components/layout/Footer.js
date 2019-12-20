import React, { Component } from 'react'
import styles from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div id={styles.footer}>
        <div id={styles.backgroundColor} className='navbar navbar-expand navbar-light d-flex justify-content-start align-items-center fixed-bottom'>
          <p className="container">Copy Right Swift Commerce &copy;</p>
        </div>
      </div>
    )
  }
}
