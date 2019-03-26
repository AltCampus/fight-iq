import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SimpleEvent extends Component {
	render() {
		let { event, isLogged } = this.props;
		return (
			<div className='SimpleEvent'>
				{isLogged ? (
					<Link to={`events/${event._id}`}>
						<p className='past-event-title'>{event.title}</p>
						<p className='past-event-main-event'>{event.main_event}</p>
					</Link>
				) : (
					<Link to={`/login`}>
						<p className='past-event-title'>{event.title}</p>
						<p className='past-event-main-event'>{event.main_event}</p>
					</Link>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.user.isLogged
	};
};
export default connect(mapStateToProps)(SimpleEvent);
