import React, { Component } from 'react';
import AdminEvent from './AdminEvent';
import { connect } from 'react-redux';

class AdminEvents extends Component {
	render() {
		let { Adminevents } = this.props;
		return (
			<div className="AdminEvents">
				{ Adminevents.map(event=><Event key={event.title}  event={event}/>) }
			</div>
			);
	}
}


const mapStateToProps = (state) => {
	return {
		Adminevents: state.Adminevents
	}
}


export default connect(mapStateToProps)(AdminEvents);
