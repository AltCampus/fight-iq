import React, { Component } from "react";
import { registerSubmit } from "./../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCred: {
				email: "",
				password: "",
				username: ""
			},
			error: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(registerSubmit(this.state.userCred, this.redirectUser));
	};

	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.history.push("/login");
		} else {
			this.setState({
				error: errorMsg
			});
		}
	};

	updateValue = (event) => {
		// let userCred = this.state.userCred
		this.setState({
			userCred: {
				...this.state.userCred,
				[event.target.name]: event.target.value
			}
		});
	};

	render() {
		return (
			<div className='Register'>
				<div className='top'>
					<div className='top-header'>FightIQ</div>
				</div>
				<div className='bottom'>
					<form className='form' onSubmit={this.handleSubmit}>
						<label>Username</label>
						<input
							type='text'
							name='username'
							onChange={this.updateValue}
							required
							id='username'
						/>
						<label>Email</label>
						<input
							type='text'
							name='email'
							onChange={this.updateValue}
							required
							id='email'
						/>
						<label>Password</label>
						<input
							type='password'
							name='password'
							onChange={this.updateValue}
							required
							id='password'
						/>
						<button type='submit'>Login</button>
					</form>
					<div className='login-register-toggle'>
						<Link to='/login'>Already User? Login instead</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Register);
