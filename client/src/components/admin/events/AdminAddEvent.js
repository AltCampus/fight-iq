import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditEvent, addEvent, editEvent } from './../../../actions';

class AdminAddEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
			eventDetails: {
				title: "",
				main_event: "",
				location: "",
				date_time: ""
			},
			error: "",
			isEdit: false
		}
	}

	componentDidMount(){
		let isEdit = /edit/g.test(this.props.location.pathname)
		this.setState({
			isEdit: isEdit
		})

		if (isEdit){
			let event = this.props.event;
			this.setState({
				eventDetails:{
					...this.state.eventDetails,
					title: event.title,
					main_event: event.main_event,
					location: event.location,
					date_time: event.date_time	
				}
			})
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.isEdit){
			this.props.dispatch(editEvent(this.state.eventDetails, this.redirectUser, this.props.match.params.eventid ))
		} else {
			this.props.dispatch(addEvent(this.state.eventDetails, this.redirectUser))
		}
	}

	redirectUser = (success, errorMsg) => {
		if (success){
			this.props.history.push('/admin');
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	updateValue = (event) => {
		this.setState({
			eventDetails: {
				...this.state.eventDetails,
				[event.target.name]: event.target.value
			}		
		})
	}

	render() {
		let { eventDetails } = this.state;
		return (
			<div className="AdminAddEvent">
				<form onSubmit={this.handleSubmit}>
					<div>Title:</div>
					<input type="text" name="title" onChange={this.updateValue} value={eventDetails.title} required/>
					<div>Main Event:</div>
					<input type="text" name="main_event" onChange={this.updateValue} value={eventDetails.main_event} required/>
					<div>Location: </div>
					<input type="text" name="location" onChange={this.updateValue} value={eventDetails.location} required/>
					<div>Date & time:</div>
					<input type="datetime-local" name="date_time" onChange={this.updateValue} value={eventDetails.date_time} required/>
					<br/>
					<button>Submit</button>
				</form>
				<div className="err-msg">{this.state.error}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		event: state.event
	}
}

export default connect(mapStateToProps)(AdminAddEvent);