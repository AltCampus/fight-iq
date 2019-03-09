import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEvent } from './../../actions';

class Event extends Component {

	handleDelete(id){
		this.props.dispatch(deleteEvent(id))
		this.props.dispatch(getEvents())
	}

	render() {
		let {event} = this.props
		// console.log(event)
		return (
			<div className="Event">
			<Link to={"/admin/event/" + event._id}>
				<div className="eventTitle">{ event.title}</div> 
			</Link>

				<div className="mainEvent">{event.mainEvent}</div>
			
				<Link to={'/admin/' + event._id + '/edit'} >
					<i className="fas fa-edit"></i>
				</Link>
			
				<Link to={'/admin'} onClick={()=>{this.handleDelete(event._id)}}>
					<i className="fas fa-trash-alt"></i>	
				</Link>
			
			</div>
			);
		}
	}



	export default connect()(Event);
