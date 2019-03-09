import React, { Component } from 'react';

class Events extends Component {
	handleClick(title){	
	}

	render() {
		let {event} = this.props
		return (
			<div className="Event">
				<div className="eventTitle">{ event.title}</div> 
				<button onClick={this.handleClick(event.title)}>Predict</button>
			</div>
			);
		}
	}


	export default Events;
