import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditEvent, addEvent, editEvent } from './../../actions';

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
			mode: "add"
		}
	}

	componentDidMount(){
		// Checking if edit or add mode

		let regex1 = RegExp('edit');
		let isEdit = regex1.test(this.props.location.pathname);

		this.setState({
			mode: isEdit? 'edit': 'add'
		})

		if (isEdit){
			// this.props.dispatch(updateEditEvent(this.props.match.params.eventid));
			this.fetchEventAndUpdate()
		}

	}

	fetchEventAndUpdate = () =>{
		fetch("http://localhost:8000/api/v1/events/" + this.props.match.params.eventid)
			.then(res=>res.json())
			.then(data=>{
				let event = data.event;

				this.setState({
						eventDetails: {
							...this.state.eventDetails,
							title: event.title,
							main_event: event.main_event,
							location: event.location,
							date_time: event.date_time
						}	
				})

			})
	}

	handleAddSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(addEvent(this.state.eventDetails, this.redirectUser))
	}

	handleEditSubmit = () => {
		event.preventDefault();
		this.props.dispatch(editEvent(this.state.eventDetails, this.redirectUser, this.props.match.params.eventid ))
	}

	redirectUser = (success, errorMsg) => {
		console.log(success)
		if (success){
			this.props.history.push('/admin');
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	updateValue = (event) => {
		// let userCred = this.state.userCred
		this.setState({
			eventDetails: {
				...this.state.eventDetails,
				[event.target.name]: event.target.value
			}		
		})
	}

	// Todo : Need to be discussed about the get request before edit

	render() {
		let { eventDetails } = this.state;

		return (
			<div>
				{
					this.state.mode=='edit'? (
						<form onSubmit={this.handleEditSubmit}>
								<div>Title:</div>
								<input type="text" name="title" onChange={this.updateValue} value={eventDetails.title}/>
								<div>Main Event:</div>
								<input type="text" name="main_event" onChange={this.updateValue} value={eventDetails.main_event}/>
								<div>Location: </div>
								<input type="text" name="location" onChange={this.updateValue} value={eventDetails.location}/>
								<div>Date & time:</div>
								<input type="datetime-local" name="date_time" onChange={this.updateValue} value={eventDetails.date_time}/>
								<br/>
								<button>Submit</button>
						</form>
						):(
							<form onSubmit={this.handleAddSubmit}>
								<div>Title:</div>
								<input type="text" name="title" onChange={this.updateValue}/>
								<div>Main Event:</div>
								<input type="text" name="main_event" onChange={this.updateValue} />
								<div>Location: </div>
								<input type="text" name="location" onChange={this.updateValue} />
								<div>Date & time:</div>
								<input type="datetime-local" name="date_time" onChange={this.updateValue} />
								<br/>
								<button>Submit</button>
						</form>
						)
				}
				<div className="err-msg">{this.state.error}</div>
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