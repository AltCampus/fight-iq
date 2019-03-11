import React, { Component } from "react";
import AdminEvents from "./events/AdminEvents";
import "./style.scss";
import { Link } from "react-router-dom";

export default class Admin extends Component {
	
	render() {
		return (
			<div className="Admin">
				<AdminEvents />
				<Link to="/admin/event">
					<button className="add-event">Add Event</button>
				</Link>
				<Link to='/admin/players/add'>
					<button className='add-player'>Add a player</button>
				</Link>
			</div>
		);
	}
}
