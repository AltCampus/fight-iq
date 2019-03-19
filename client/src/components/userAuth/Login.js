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
		<div className="Login">
			<div class="top">
     		<div class="top-header">FightIQ</div>
    	</div>
    	<div class="bottom">
				<form class="form" onSubmit={this.handleSubmit}>
      		<label>Email</label>
      		<input type="text" name="username" onChange={this.updateValue} required id="email"/>
      		<label>Password</label>
      		<input type="password" name="password" onChange={this.updateValue} required id="password"/>
      		<input type="submit" id="submit" value="Submit"/>
    		</form>
			</div>
		</div>
		);
	}
}


export default connect()(Login);
