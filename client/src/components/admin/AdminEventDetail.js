<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
>>>>>>> 1db321d9c5a6c74fd30074781d7490b409317be2
// import Fight from './Fight';

class AdminEventDetail extends Component {
	// Onload do a fetch request to get the event detail
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));
	}

	render() {
		// filter specific event from the events array
		let { event } = this.props;

		return (
			<div className='AdminEventDetail'>
				<div>{event.title}</div>
				<div>{event.mainEvent}</div>
				<div>{event.location}</div>
				<div>{event.date_time}</div>
				{/*
					event.fights && event.fights.map(fight=><Fight data={fight}/>)
				*/}
				<button>Add a fight</button>
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
