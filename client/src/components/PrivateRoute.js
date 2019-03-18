import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute ({ component: Component, auth, isLogged, ...rest }){
	return (<Route {...rest} render={(props) => (
		    	auth === true
		      ? <Component {...props} />
		      : isLogged? <Redirect to="/"/>: <Redirect to='/login' />
  			)} />
	)
};

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	}
}

export default connect(mapStateToProps)(PrivateRoute);




