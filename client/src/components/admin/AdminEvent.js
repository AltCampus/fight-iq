import React, { Component } from 'react';

class Events extends Component {
	handleClick(title){	
		console.log(title)
	}

	render() {
		let {event} = this.props
		return (
			<div className="Event">
				<div className="eventTitle">{ event.title}</div> 
				<img src={`${event.players.player1.imgLink}`} />
				<img src={`${event.players.player2.imgLink}`} />
				<div className="mainEvent">{event.mainEvent}</div>
				<button onClick={this.handleClick(event.title)}>Predict</button>
			</div>
			);
		}
	}

	export default Events;
