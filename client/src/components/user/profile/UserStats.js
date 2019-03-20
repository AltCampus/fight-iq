import React, { Component } from 'react';

class UserStats extends Component {
	render() {
		let { user } = this.props;
		return (
			<div className="UserStats">
					<div className="user-points">
						<div className="user-stats-header">Points</div>
						<div className="user-stats">{user.points || 0}</div>
					</div>
					<div className="user-prediction">
						<div className="user-stats-header">Win Accuracy</div>
						<div className="user-stats">{user.accuracy} %</div>
					</div>
					<div className="user-level">
						<div className="user-stats-header">Level</div>
						<div className="user-stats">Level 1: White belt</div>
					</div>
			</div>
			);
		}
	}

	export default UserStats;