import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {
	handleClick(title){	
		console.log(title)
	}

	render() {
		let {event} = this.props
		return (
			<div className="Event">
				<div className="eventTitle">{ event.title}</div> 
				<div className="mainEvent">{event.mainEvent}</div>
				<Link to={`/admin/:eventid/edit`} >
					<i className="fas fa-edit"></i>
				</Link>
				<i className="fas fa-trash-alt"></i>
			</div>
			);
		}
	}



	export default Event;
