import React, { Component } from 'react';
import { registerSubmit } from './../../actions';
import { connect } from 'react-redux';
import "./style.scss";

class Register extends Component {

	constructor(props){
		super(props);
		this.state = {
			userCred: {
				email: '',
				password: '',
				username: ''
			},
			error: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(registerSubmit(this.state.userCred, this.redirectUser));
	}
 	
	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/login');
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
			<form onSubmit={this.handleSubmit}>
					<div>Name:</div>
					<input type="text" name="username" onChange={this.updateValue}/>
					<div>Email:</div>
					<input type="text" name="email" onChange={this.updateValue}/>
					<div>Password:</div>
					<input type="password" name="password" onChange={this.updateValue}/>
					<br/>
					<button>Register</button>
			</form>
			</div>
		);
	}
}

export default connect()(Register);
