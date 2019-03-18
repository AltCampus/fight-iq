import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent } from "../../actions";
import Fight from "./EventDetailsFight";
import "./style.scss";

class EventDetails extends Component {
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));
	}

	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.history.push("/");
		} else {
			this.setState({
				error: errorMsg
			});
		}
	};

	render() {
		let { event, fights, isLogged } = this.props;

		return (
			<div className='event-detail-page'>
				<div className='event-detail-banner'>
					<div className='event-title'>{event.title}</div>
					<div className='event-location'>{event.location}</div>
					<div className='event-date_time'>{event.date_time}</div>
				</div>
				<div className='AdminEventDetail'>
					<div className='event-bottom-section' />
					<h5 className='fights'>Fights: </h5>
					{fights &&
						fights.map((fight) => (
							<Fight key={fight._id} fight={fight} eventid={event._id} />
						))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		event: state.event,
		fights: state.event.fight,
		isLogged: state.isLogged
	};
};

export default connect(mapStateToProps)(EventDetails);
