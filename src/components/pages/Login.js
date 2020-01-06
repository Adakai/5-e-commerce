import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addActions'
import style from './Login.module.scss';

class Login extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      username: '',
      password: ''
    }
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  checkLogin () {
    if (this.state.username === 'admin' && this.state.password === 'password') {
      this.props.addUser(this.state.username);
    }
    this.setState({password: ''});
    this.setState({username: ''});
  }

  render() {
    console.log(this.state)
    return (
      <div className={style.margin}>
        <form className='container mt-5'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              value={this.state.username}
              onChange={this
                .onUsernameChange
                .bind(this)}
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              value={this.state.password}
              onChange={this
                .onPasswordChange
                .bind(this)}
            />
          </div>
          <button type='button' className='btn btn-dark' onClick={this.checkLogin.bind(this)}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addUser})(Login);
