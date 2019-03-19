import React, { Component } from 'react';

class UserPrediction extends Component {
	render() {
		let {predictions} = this.props
		return (
			<div className="UserPrediction">
					<div className="UserPrediction-event-details">
						<div>Event: {predictions[0].eventid.title}</div>
						<div>Fight: {predictions[0].fightid.title}</div>
					</div>
					<div className="UserPrediction-result">
						<div className="UserPrediction-header" >Results: </div>
						<div>Winner: {predictions[0].fightid.result.winner.name}</div>
						<div>Type: {predictions[0].fightid.result.type}</div>
						<div>Round: {predictions[0].fightid.result.round}</div>
					</div>
					<div className="UserPrediction-prediction">
						<div className="UserPrediction-header" >Prediction: </div>
						<div>Winner: {predictions[0].winner.name}</div>
						<div>Type: {predictions[0].type}</div>
						<div>Round: {predictions[0].round}</div>
					</div>
			</div>
			);
		}
	}

	export default UserPrediction;
