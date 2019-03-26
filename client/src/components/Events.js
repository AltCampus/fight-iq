import React, { Component } from "react";
import Event from "./Event";
import { connect } from "react-redux";
import { getEvents } from "./../actions";

class Events extends Component {
	componentDidMount() {
		this.props.dispatch(getEvents());
	}

	render() {
		let { events } = this.props;
		return (
			<div>
				<div className="Events">
					{ events.map(event=><Event key={event._id}  event={event}/>) }
				</div>

			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		events: state.event.events
	};
};

export default connect(mapStateToProps)(Events);
