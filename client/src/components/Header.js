import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	Header
      	<Link to="/" >Home</Link>
      	<Link to="/admin">Admin</Link>
      	<Link to="/login" >Login</Link>
      	<Link to="/register" >Sign-up</Link>
      </div>
    );
  }
}

export default Header;
