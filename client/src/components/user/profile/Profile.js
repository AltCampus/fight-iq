import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';
import UserStats from './UserStats';
import UserPredictions from './UserPredictions';
import { getUser } from './../../../actions';
import './style.scss';

class Profile extends Component {
	componentDidMount(){
		this.props.dispatch(getUser(this.redirectUser));
	}

	redirectUser(status){
		// TODO: Handle user data not found redirect
	}

	render() {
		let { user } = this.props;
		return (
			<div className="Profile">
				<UserDetails user={user}/>
				<UserStats user={user}/>
				<UserPredictions user={user}/>
			</div>
			);
		}
	}

	const mapStateToProps = (state) => {
		return {
			user: state.user
		}
	}

	export default connect(mapStateToProps)(Profile);