import React, { Component } from 'react';
import UserPrediction from './UserPrediction';

class UserPredictions extends Component {
	render() {
		let {user} = this.props;
		return (
			<div className="UserPredictions">
				<h1 className="UserPredictions-header">Predictions:</h1> 
					{user.predictions.map(prediction=><UserPrediction key={prediction._id} prediction={prediction}/>)}
			</div>
			);
		}
	}

export default UserPredictions;