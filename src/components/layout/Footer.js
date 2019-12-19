import React, { Component } from 'react'
import styles from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div id={styles.backgroundColor} className='navbar navbar-expand navbar-light d-flex justify-content-start align-items-center'>
          <p className="container">Copy Right Swift Commerce &copy;</p>
        </div>
      </div>
    )
  }
}
