import React, { Component } from "react";

import { loginSubmit, showMessage } from "./../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ErrorModal from "./../ErrorModal.js";

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
        console.log("post success:", success, errorMsg)
        if (success) {
            this.props.history.push("/");
            this.props.dispatch(showMessage("Login Successful!"))
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
        // const {isLogged} = this.props;

        return (
            <div className='Login'>
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
						<Link to='/register'>New here? Register instead</Link>
					</div>
				</div>
				<ErrorModal display={!!this.state.error} message={this.state.error}/>
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged
    };
};

export default connect(mapStateToProps)(Login);