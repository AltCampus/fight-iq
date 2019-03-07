import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEditEvent, addEvent } from './../../actions';

class AdminAddEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
			eventDetails: {
				title: "",
				mainEvent: "",
				location: "",
				dateTime: ""
			},
			error: "",
			mode: "add"
		}
	}

	componentDidMount(){
		// Checking if edit or add mode

		let regex1 = RegExp('edit');
		let isEdit = regex1.test(this.props.location.pathname);

		if (isEdit){
			this.setState({
				mode: 'edit'
			})
		} else {
			this.setState({
				mode: 'add'
			})
		}

		this.props.dispatch(updateEditEvent(this.props.match.params.eventid));
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(addEvent(this.state.eventDetails, this.redirectUser))
	}

	redirectUser = (success) => {
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

	render() {
		let { editEvent } = this.props;

		return (
			<div>
				{
					this.state.mode=='edit'? (
						<form onSubmit={this.handleSubmit}>
								<div>Title:</div>
								<input type="text" name="title" onChange={this.updateValue} value={editEvent.title}/>
								<div>Main Event:</div>
								<input type="text" name="mainEvent" onChange={this.updateValue} value={editEvent.mainEvent}/>
								<div>Location: </div>
								<input type="text" name="location" onChange={this.updateValue} value={editEvent.location}/>
								<div>Date & time:</div>
								<input type="datetime-local" name="dateTime" onChange={this.updateValue} value={editEvent.dateTime}/>
								<br/>
								<button>Submit</button>
						</form>
						):(
							<form onSubmit={this.handleSubmit}>
								<div>Title:</div>
								<input type="text" name="title" onChange={this.updateValue}/>
								<div>Main Event:</div>
								<input type="text" name="mainEvent" onChange={this.updateValue} />
								<div>Location: </div>
								<input type="text" name="location" onChange={this.updateValue} />
								<div>Date & time:</div>
								<input type="datetime-local" name="dateTime" onChange={this.updateValue} />
								<br/>
								<button>Submit</button>
						</form>
						)
				}
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