import React, { Component } from "react";

class UserPrediction extends Component {
	render() {
		let { prediction } = this.props;
		console.log(prediction, "data in user predication.js line6");
		return (
			<div className='UserPrediction'>
				<div className='UserPrediction-event-details'>
					<div>Event: {prediction.eventid.title}</div>
					<div>Fight: {prediction.fightid.title}</div>
				</div>
				<div className='UserPrediction-result'>
					<div className='UserPrediction-header'>Results: </div>
					<div>Winner: {prediction.fightid.result.winner.name}</div>
					<div>Type: {prediction.fightid.result.type}</div>
					<div>Round: {prediction.fightid.result.round}</div>
				</div>
				<div className='UserPrediction-prediction'>
					<div className='UserPrediction-header'>Prediction: </div>
					<div>Winner: {prediction.winner.name}</div>
					<div>Type: {prediction.type}</div>
					<div>Round: {prediction.round}</div>
				</div>
			</div>
		);
	}
}

export default UserPrediction;
