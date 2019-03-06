import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditEvent } from './../../actions';

class AdminAddEvent extends Component {
	componentDidMount(){
		this.props.dispatch(updateEditEvent());
	}

	render() {
		let { editEvent } = this.props;

		return (
			<div>
				<form method="POST" action="/api/v1/admin/event">
					<div>Title:</div>
					<input type="text" name="title"/>
					<div>Main Event:</div>
					<input type="text" name="mainEvent" />
					<div>Location: </div>
					<input type="text" name="location" />
					<div>Date & time:</div>
					<input type="datetime-local" name="dateTime" />
					<br/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return {
		editEvent: state.editEvent
	}
}


export default connect(mapStateToProps)(AdminAddEvent);