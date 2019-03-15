import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ component: Component, auth,  ...rest }){
	return (<Route {...rest} render={(props) => (
		    	auth === true
		      ? <Component {...props} />
		      : <Redirect to='/login' />
  			)} />
	)
};

export default PrivateRoute;




