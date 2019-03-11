import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFight } from "../../actions/fitght";

class AddFight extends Component {
	// Fetch Players data to show in the fight creation time(name, id is good enough)
	constructor(props) {
		super(props);
		this.state = {
			fightDetails: {
				title: "",
				type: "",
				rounds: "",
				player1_id: "",
				player2_id: "",
				playersList: []
			}
		}
	}

	fetchUsersData = () => {};

	componentDidMount() {
		// Get the players list and add it to the state
		// fetchUsersData();
	}

	updateValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFightSubmit = (e) => {
		e.preventDefault();
		const eventId = this.props.match.params.eventid;
		console.log(eventId, "sdfghbjnsdxcfghbjndcfvgbhn");
		this.props.dispatch(
			addFight(this.state, eventId, (success) => {
				if (success) {
					this.props.history.push(`/admin/event/${eventId}`);
				}
			})
		);
	};

	render() {
		return (
			<div className='AddFight'>
				<form>
					<div>Title:</div>
					<input type='text' name='title' onChange={this.updateValue} />
					<div>Type: </div> {/* make this a dropdown */}
					<input type='text' name='type' onChange={this.updateValue} />
					<div>Rounds: </div>
					<select name='rounds' id='rounds' onChange={this.updateValue}>
						<option value='1-rounds'>1-rounds</option>
						<option value='2-rounds'>2-rounds</option>
						<option value='3-rounds'>3-rounds</option>
					</select>
					<h5>Player 1</h5>
					<select name='player1_name' id='player1_name' />
					<div>Name:</div> {/* // Dropdown according to the data fetched */}
					<input type='text' name='player1-name' onChange={this.updateValue} />
					<h5>Player 2</h5>
					<div>Name:</div> {/* // Dropdown according to the data fetched */}
					<input type='text' name='player2-name' onChange={this.updateValue} />
					<br />
					<button onClick={this.handleFightSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddFight);
