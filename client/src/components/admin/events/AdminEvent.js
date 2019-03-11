import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {
	render() {
		let {event} = this.props
		return (
			<div className="Event">
				<Link to={"/admin/event/" + event._id}>
					<div className="eventTitle">{ event.title}</div> 
				</Link>
				<div className="mainEvent">{event.mainEvent}</div>
			</div>
			);
		}
	}

	export default Event;
