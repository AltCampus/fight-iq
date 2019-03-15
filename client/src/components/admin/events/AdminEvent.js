import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminEvent extends Component {
	render() {
		let {event} = this.props
		return (
			<div className="AdminEvent">
				<Link to={"/admin/event/" + event._id}>
					<div className="event-title">{ event.title}</div> 
					<div className="event-location">{event.location}</div>
					<div className="event-date_time">{event.date_time}</div>
				</Link>
			</div>
			);
		}
	}

	export default AdminEvent;
