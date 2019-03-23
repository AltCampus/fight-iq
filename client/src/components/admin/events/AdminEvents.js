import React, { Component } from 'react';
import AdminEvent from './AdminEvent';
import { connect } from 'react-redux';
import { getEvents } from './../../../actions';


class AdminEvents extends Component {
	componentDidMount(){
		this.props.dispatch(getEvents())
	}

	render() {
		let { Adminevents } = this.props;
		return (
			<div className="AdminEvents">
				{ Adminevents.map(event=><AdminEvent key={event._id} event={event}/>) }
			</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		Adminevents: state.events
	}
}

export default connect(mapStateToProps)(AdminEvents);
