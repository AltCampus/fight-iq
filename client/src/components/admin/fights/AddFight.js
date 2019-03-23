import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFight, getPlayers, editFight } from "../../../actions";

class AddFight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fightDetails: {
				title: "",
				type: "main",
				rounds: "five",
				player1: "",
				player2: ""
			},
			error: "",
			players: [],
			isEdit: false
		};
	}

	componentDidMount() {
		this.props.dispatch(getPlayers());

		let isEdit = /edit/g.test(this.props.location.pathname);
		this.setState({
			isEdit: isEdit
		});

		let { eventid, fightid } = this.props.match.params;
		if (isEdit) {
			let fight = this.props.event.fight.find((fight) => fight._id === fightid);
			this.setState({
				fightDetails: {
					...this.state.fightDetails,
					title: fight.title,
					type: fight.type,
					rounds: fight.rounds,
					player1: fight.player1_id,
					player2: fight.player2_id
				}
			});
		}
	}

	updateValue = (e) => {
		this.setState({
			fightDetails: {
				...this.state.fightDetails,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.isEdit) {
			let { eventid, fightid } = this.props.match.params;
			this.props.dispatch(
				editFight(this.state.fightDetails, eventid, fightid, this.redirectUser)
			);
		} else {
			let { eventid } = this.props.match.params;
			this.props.dispatch(
				addFight(this.state.fightDetails, eventid, this.redirectUser)
			);
		}
	};

	redirectUser = (success, errorMsg = "") => {
		const eventId = this.props.match.params.eventid;
		if (success) {
			this.props.history.push(`/admin/event/${eventId}`);
		} else {
			this.setState({
				error: errorMsg
			});
		}
	};

	render() {
		let players = this.props.players;
		let { fightDetails } = this.state;
		return (
			<div className='AddFight'>
				<form onSubmit={this.handleSubmit}>
					<label>Title:</label>
					<input
						type='text'
						name='title'
						onChange={this.updateValue}
						value={fightDetails.title}
						required
					/>
					<label>Type: </label> {/* make this a dropdown */}
					<select name='type' id='type' onChange={this.updateValue} value={fightDetails.type} required>
						<option value='main'>main</option>
						<option value='comain'>comain</option>
						<option value='other'>other</option>
					</select>
					{/* <input type='text' name='type' onChange={this.updateValue} value={fightDetails.type} required/> */}
					<label>Rounds: </label>
					<select name='rounds' id='rounds' onChange={this.updateValue} value={fightDetails.rounds} required>
						<option value='five'>5-Rounds</option>
						<option value='three'>3-Rounds</option>
					</select>
					<label>Player 1: </label>
					<select name='player1' onChange={this.updateValue} required>
						<option value='none'>select</option>
						{players &&
							players.map((player) => (
								<option key={player._id} value={player._id}>
									{player.name}
								</option>
							))}
					</select>
					<label>Player 2: </label>
					<select name='player2' onChange={this.updateValue} required>
						<option value='none'>select</option>
						{players &&
							players.map((player) => (
								<option key={player._id} value={player._id}>
									{player.name}
								</option>
							))}
					</select>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		players: state.players.player,
		event: state.event
	};
};

export default connect(mapStateToProps)(AddFight);
