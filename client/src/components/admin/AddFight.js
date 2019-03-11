import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFight } from "../../actions/fight";

class AddFight extends Component {
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
		}
	}

	fetchUsersData = () => {
		fetch('http://localhost:8000/api/v1/players')
		.then(res=>res.json())
		.then(data=>{
			this.setState({
				players: data.player
			})
		})
	};

	componentDidMount() {
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
		let players = this.state.players;
		return (
			<div className='AddFight'>
				<form>
					<div>Title:</div>
					<input type='text' name='title' onChange={this.updateValue} required/>
					<div>Type: </div> {/* make this a dropdown */}
					<input type='text' name='type' onChange={this.updateValue} required/>
					<div>Rounds: </div>
					<select name='rounds' id='rounds' onChange={this.updateValue} required>
						<option value='1-rounds'>5-Rounds</option>
						<option value='2-rounds'>3-Rounds</option>
					</select>
					<h5>Player 1</h5>
					<select name='player1' required>
						{
							players.map(player=>(<option key={player._id} value={player._id} >{player.name}</option>))
						}
					</select>
					<h5>Player 2</h5>
					<select name='player2' required>
						{
							players.map(player=>(<option key={player._id} value={player._id} >{player.name}</option>))
						}
					</select>
					<br />
					<button onClick={this.handleFightSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddFight);
