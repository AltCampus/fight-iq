import React, { Component } from "react";
import Event from "./Event";
import { connect } from "react-redux";
import { getEvents } from "./../actions";

class Events extends Component {
	componentDidMount() {
		// Call an action to do Get request on events
		this.props.dispatch(getEvents());
	}

	render() {
		let { events } = this.props;
		console.log(events, "check the data in events");
		return (
			<div className='Events'>
				{events.map((event) => (
					<Event key={event._id} event={event} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events
	};
};

export default connect(mapStateToProps)(Events);
