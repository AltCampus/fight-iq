import React, { Component } from 'react';
import Events from './AdminEvents';
import './style.scss';
import { Link } from 'react-router-dom';

export default class Admin extends Component {
	render() {
		return (
			<div className="Admin">
				<Events />
				<Link to="/admin/event">
					<button className="add-event">Add Event</button>
				</Link>
			</div>
		);  
	}
}

