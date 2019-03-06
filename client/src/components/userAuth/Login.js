import React, { Component } from 'react';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// this.props.dispatch(loginSubmit(this.state));
	}

	updateValue = (event) => {
		console.log(event.target.name)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div className="Login-section">
			<h1> Login form</h1>
			<form onSubmit={this.handleSubmit} >
				Email:
				<input type="text" name="email" onChange={this.updateValue}/>
				Password:
				<input type="password" name="password" onChange={this.updateValue}/>
				<button>Login</button>
			</form>
			</div>
		);
	}
}

export default Login;
