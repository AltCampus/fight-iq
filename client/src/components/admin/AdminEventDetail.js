import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Fight from './Fight';
import { getEvent } from './../../actions';

class AdminEventDetail extends Component {
	// Onload do a fetch request to get the event detail
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));
	}

	render() {
		// filter specific event from the events array
		let { event } = this.props;
		console.log("Within every event", event._id)
		return (
			<div className='AdminEventDetail'>
				<div>{event.title}</div>
				<div>{event.mainEvent}</div>
				<div>{event.location}</div>
				<div>{event.date_time}</div>
				{/*
					event.fights && event.fights.map(fight=><Fight data={fight}/>)
				*/}
				<Link to={'/admin/' + event._id + '/fights'}  >
					<button>Add a fight</button>
				</Link>
			</div>
		);
	}
}

// fetch all events data from the store
const mapStateToProps = (state) => {
	return {
		event: state.event
	};
};

export default connect(mapStateToProps)(AdminEventDetail);
