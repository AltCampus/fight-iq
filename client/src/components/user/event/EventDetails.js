import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent } from "../../../actions";
import Fight from "./EventDetailsFight";
import './style.scss';

class EventDetails extends Component {
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));		
	}

	render() {
		let { event } = this.props;
		const { fights } = this.props;
		let eventDate = event.date_time && event.date_time.split('T')[0];
		let eventTime = event.date_time && event.date_time.split('T')[1];

		return (
			<div className="EventDetails">
				<div className="event-detail-banner">
					<div className="event-title">{event.title}</div>
					<div className="event-main-event">{event.main_event}</div>
					<div className="event-location">{event.location}</div>
					<div className="event-date_time">{eventTime}, {eventDate} </div>
				</div>
					{
						fights && fights.map(fight=><Fight key={fight._id} fight={fight} eventid={event._id}/>)
					}
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		event: state.event,
		fights: state.event.fight
	};
};

export default connect(mapStateToProps)(EventDetails);
