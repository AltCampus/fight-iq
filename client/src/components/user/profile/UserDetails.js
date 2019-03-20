import React, { Component } from 'react';

class UserDetails extends Component {
	render() {
		let { user } = this.props;
		return (
			<div className="UserDetails">
					<img className="user-image" src="https://hawksmoorcs.co.uk/images/profile_photo_placeholder.jpg" />
					<div className="right-section">
						<div className="user-username">UserName: {user.username}</div>
						<div className="user-email">Email: {user.email}</div>
						<div className="change-password">Change Password</div>
					</div>
			</div>
			);
		}
	}



	export default UserDetails;
