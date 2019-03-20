import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "./../actions";

class Header extends Component {
	handleLogout = () => {
		this.props.dispatch(handleLogout());
		this.props.history.push('/');
	};

	render() {
		let { isLogged } = this.props;
		return (
			<div className='Header'>
				<Link to='/'>
					<div className='Logo'>FightIQ</div>
				</Link>
				{isLogged ? (
					<div className='top-right'>
						<a onClick={this.handleLogout}>Logout</a>
						<Link to='/profile'>Profile</Link>
					</div>
				) : (
					<div className='top-right'>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Sign-up</Link>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.isLogged
	};
};

export default withRouter(connect(mapStateToProps)(Header));
