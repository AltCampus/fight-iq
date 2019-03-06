import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Header extends Component {
  render() {
    let { isLogged } = this.props;
    return (
      <div className="Header">
      	<div className="Logo">
          FightIQ
        </div>
        {
          isLogged? (
          <div className="top-right">
            <Link to="/logout">Logout</Link>
            <Link to="/profile">Profile</Link>
          </div>
          ) : (
          <div className="top-right">
            <Link to="/login" >Login</Link>
            <Link to="/register" >Sign-up</Link>
          </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged
  }
}


export default connect(mapStateToProps)(Header);
