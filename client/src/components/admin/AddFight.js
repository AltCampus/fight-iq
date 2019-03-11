import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFight } from "../../actions/fight";

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
				player2_id: ""
			},
			players: []
		};
	}

	fetchUsersData = () => {
		fetch("http://localhost:8000/api/v1/players")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					players: data.player
				});
			});
	};

	componentDidMount() {
		// Get the players list and add it to the state
		this.fetchUsersData();
	}

	updateValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleFightSubmit = (e) => {
		e.preventDefault();
		const eventId = this.props.match.params.eventid;
		// console.log(eventId, "sdfghbjnsdxcfghbjndcfvgbhn");
		this.props.dispatch(
			addFight(this.state, eventId, (success) => {
				if (success) {
					this.props.history.push(`/admin/event/${eventId}`);
				}
			})
		);
	};

	render() {
		console.log(
			this.state.players,
			"check the players in add fight comoponent"
		);

		let players = this.state.players;
		console.log(players, "check the players in add fight comoponent");
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
					<select name='player1'>
						{players.map((player) => (
							<option key={player._id} value={player._id}>
								{player.name}
							</option>
						))}
					</select>
					<h5>Player 2</h5>
					<select name='player2'>
						{players.map((player) => (
							<option key={player._id} value={player._id}>
								{player.name}
							</option>
						))}
					</select>
					<br />
					<button onClick={this.handleFightSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddFight);
