import React, { Component } from "react";

class UserPrediction extends Component {
	render() {
		let { prediction } = this.props;
		let resultPresent = !!prediction.fightid.result;
		return (
			<div className='UserPrediction'>
				<div className='UserPrediction-event-details'>
					<div className="event-name">{prediction.eventid.title}</div>
					<div className="fight-name">{prediction.fightid.title}</div>
				</div>
				{
					resultPresent? 
					(
						<div className='UserPrediction-result'>
							<div>Winner: {prediction.fightid.result.winner.name}</div>
							<div>Type: {prediction.fightid.result.type}</div>
							<div>Round: {prediction.fightid.result.round}</div>
						</div>
					): (
						<div className='UserPrediction-result'>
							Event yet to happen!
						</div>

					)
				}
				<div className='UserPrediction-prediction'>
					<div>Winner: {prediction.winner.name}</div>
					<div>Type: {prediction.type}</div>
					<div>Round: {prediction.round}</div>
				</div>
			</div>
		);
	}
}

export default UserPrediction;
