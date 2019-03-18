import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

class EventDetailsFight extends Component {
	

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/event/' + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
		let {eventid, fight} = this.props;
		let player1NameSplit = fight.player1.name.split(" ");
		let player2NameSplit = fight.player2.name.split(" ");

		return (
			<div className="EventDetailsFight">
				<div className="player1-content">
					<img src={fight.player1.image} />
					<div className="player1-details">
						<div className="player-name">{fight.player1.name}</div>
					</div>
				</div>
				<div className="mid-section">
				Vs
				</div>
				<div className="player2-content">
					<div className="player2-details">
						<div className="player-name">{fight.player2.name}</div>
					</div>
					<img src={fight.player2.image} />
				</div>
				<Link to={{pathname:'/events/' + eventid + '/fights/' + fight._id + '/predict', state: fight}}>
					<button>Predict</button>
				</Link>
			</div>

						
		);
	}
}	

	export default withRouter(connect()(EventDetailsFight));