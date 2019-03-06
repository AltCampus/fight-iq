import React, { Component } from 'react';
import Event from './Event';
import { connect } from 'react-redux';


class Events extends Component {
	render() {
		let { events } = this.props;
		return (
			<div className="Events">
				{ events.map(event=><Event key={event.title}  event={event}/>) }
			</div>
			);
	}
}


const mapStateToProps = (state) => {
	return {
		events: state.events
	}
}


export default connect(mapStateToProps)(Events);
