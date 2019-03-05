import React, { Component } from 'react';

class Register extends Component {
	render() {
		return (
			<div className="Register">
			<form >
			Name:
			<input type="text" name="username" />
			Email:
			<input type="text" name="email" />
			Password:
			<input type="password" name="password"/>
			<button>Register</button>
			</form>
			</div>
		);
	}
}

export default Register;
