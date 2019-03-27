import React, { Component } from "react";
import { registerSubmit, showMessage } from "./../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";

import ErrorModal from "./../ErrorModal.js";

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

		let { email, password } = this.state.userCred;
		let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
		let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=^[a-zA-Z0-9@#$%^&*]+$).{6,}$/.test(password);

		if (!validEmail){
			this.setState({
				error: "Not a valid Email. Please Check and Try Again!"
			});
		} else if(!validPassword){
			this.setState({
				error: "Not a valid Password. Please Check and Try Again!"
			});
		} else {
			this.props.dispatch(registerSubmit(this.state.userCred, this.redirectUser));
		}
	};

	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.history.push("/login");
			this.props.dispatch(showMessage("Registration Successful. Please Login!"))
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
			},
			error: ""
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
						<div className="form-note">Password must be atleast 6 character long, have atleast more than one alphabet, a number and a special character(@#$%^&*)</div>
						<button type='submit'>Register</button>
					</form>
					<div className='login-register-toggle'>
						<Link to='/login'>Already User? Login instead</Link>
					</div>
				</div>
				<ErrorModal display={!!this.state.error} message={this.state.error}/>
			</div>
		);
	}
}

export default connect()(Register);
