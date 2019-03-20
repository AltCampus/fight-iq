import React, { Component } from "react";
import AdminEvents from "./events/AdminEvents";
import "./style.scss";
import { Link } from "react-router-dom";

export default class Admin extends Component {
	render() {
		return (
			<div className="Admin">
				<div className="admin-bottom-section">
					<Link to="/admin/event">
						<button className="add-event"><i className="far fa-plus-square"></i> Add Event</button>
					</Link>
					<Link to='/admin/players/add'>
						<button className='add-player'><i className="far fa-plus-square"></i> Add a player</button>
					</Link>
				</div>
				<AdminEvents />
			</div>
		);
	}
}
