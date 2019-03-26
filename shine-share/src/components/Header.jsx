import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

class Header extends Component {
  LogUserIn() {
    const Username = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
  }


  render() {
    return (
      <div>
        <div className='login-panel'>
        <form>
          <p>Login: 
          <input type='text' id='username' placeholder='Username'/> 
          <input type='password' id='password' placeholder='Password'/>
          </p>
          </form>
          
          <div className='register-link'>
            <p>Need to <Link to='/Register' className='navbar-item'>REGISTER?</Link></p>
          </div>
        </div>
        <img className='banner' alt='' src={require('../images/ShineShareTemp.png')} />
        <NavBar />
      </div>
    )
  }
}

export default Header;