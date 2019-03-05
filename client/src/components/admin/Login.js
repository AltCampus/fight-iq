import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div className="Login-section">
			<h1> Login form</h1>
			<form >
			Email:
			<input type="text" name="email" />
			Password:
			<input type="password" name="password"/>
			<button>Login</button>
			</form>
			</div>
		);
	}
}

export default Login;
