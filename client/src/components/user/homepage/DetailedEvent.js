import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class DetailedEvent extends Component {
	render() {
		let { event, isLogged } = this.props;
		let mainFight =
			event.fight && event.fight.find((fight) => fight.type == "main");

		let eventDate = event.date_time && event.date_time.split("T")[0];
		let eventTime = event.date_time && event.date_time.split("T")[1];
		return (
			<div>
				{isLogged ? (
					<Link to={`events/${event._id}`}>
						<div className='DetailedEvent'>
							<div className='event-title'>{event.title}</div>
							<div className='event-images'>
								<img className='player-1' src={mainFight.player1.image} />
								<img className='player-2' src={mainFight.player2.image} />
							</div>
							<div className='location-info'>
								<p className='txt-dec'>
									{eventTime}, {eventDate}{" "}
								</p>
								<p className='title-location'>{event.location}</p>
							</div>
							<button className='Prediction-button'>Predict</button>
						</div>
					</Link>
				) : (
					<Link to={`/login`}>
						<div className='DetailedEvent'>
							<div className='event-title'>{event.title}</div>
							<div className='event-images'>
								<img className='player-1' src={mainFight.player1.image} />
								<img className='player-2' src={mainFight.player2.image} />
							</div>
							<div className='location-info'>
								<p className='txt-dec'>
									{eventTime}, {eventDate}{" "}
								</p>
								<p className='title-location'>{event.location}</p>
							</div>
							<button className='Prediction-button'>Predict</button>
						</div>
					</Link>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.user.isLogged
	};
};

export default connect(mapStateToProps)(DetailedEvent);
