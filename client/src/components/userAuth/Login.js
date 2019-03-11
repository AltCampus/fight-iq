import React, { Component } from 'react';
import "./style.scss";
import { loginSubmit } from './../../actions';
import { connect } from 'react-redux';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			userCred: {
				username: '',
				password: ''
			},
			error: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(loginSubmit(this.state.userCred, this.redirectUser));
	}

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/');
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	updateValue = (event) => {
		// let userCred = this.state.userCred
		this.setState({
			userCred: {
				...this.state.userCred,
				[event.target.name]: event.target.value
			}		
		})
	}

	render() {
		return (
			<div className="Login-section">
			<form onSubmit={this.handleSubmit} >
				<div className="email-title">Username:</div>
				<input type="text" name="username" onChange={this.updateValue} required/>
				<div className="password-title">Password:</div>
				<input type="password" name="password" onChange={this.updateValue} required/>
				<br/>
				<button>Login</button>
			</form>
			<div className="err-msg">{this.state.error}</div>
			</div>
		);
	}
}

export default connect()(Login);
