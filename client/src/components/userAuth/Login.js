import React, { Component } from "react";
import "./style.scss";
import { loginSubmit } from "./../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCred: {
				username: "",
				password: ""
			},
			error: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(loginSubmit(this.state.userCred, this.redirectUser));
	};

	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.history.push("/");
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
		// const {isLogged} = this.props;

		return (
			<div className='Login'>
				<div className='top'>
					<div className='top-header'>FightIQ</div>
				</div>
				<div className='bottom'>
					<form className='form' onSubmit={this.handleSubmit}>
						<label>Email</label>
						<input type='text' name='username' onChange={this.updateValue} required id='email'/>
						<label>Password</label>
						<input type='password' name='password' onChange={this.updateValue} required id='password'/>
						<input type='submit' id='submit' value='Submit' />
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	};
};

export default connect(mapStateToProps)(Login);
