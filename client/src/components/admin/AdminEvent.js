import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {
	render() {
		let {event} = this.props
		return (
			<div className="Event">
			<Link to={"/admin/event/" + event.id}>
				<div className="eventTitle">{ event.title}</div> 
			</Link>
				<div className="mainEvent">{event.mainEvent}</div>
				<Link to={'/admin/' + event.id + '/edit'} >
					<i className="fas fa-edit"></i>
				</Link>
				<i className="fas fa-trash-alt"></i>
			</div>
			);
		}
	}



	export default Event;
