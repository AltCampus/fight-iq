import React, { Component } from "react";
import { connect } from "react-redux";
import { addPrediction, getFight } from "./../../actions";

class Prediction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fightDetails: {
				eventid: this.params.eventid,
				fightid: this.params.fightid,
				winner: "",
				type: "",
				round: ""
			},
			error: "",
		};
	}

	componentDidMount() {
		this.props.dispatch(getFight(this.params.eventid, this.params.fightid))

		// let { eventid, fightid } = this.props.match.params;
		// 	this.setState({
		// 		fightDetails: {
		// 			...this.state.fightDetails,
		// 			eventid: eventid,
		// 			fightid: fightid ,
				
		// 		}
		// 	})
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
        let { eventid }  = this.props.match.params;
        this.props.dispatch(addPrediction(this.state.fightDetails, this.redirectUser));

	};

	redirectUser = (success, errorMsg = "") => {
		const eventId = this.props.match.params.eventid;
		if (success){
			this.props.history.push(`/events/${eventId}`);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {

		let { fightDetails } = this.state;
		return (
			<div className='AddFight'>
				{/* <form onSubmit={this.handleSubmit}>
					<div>Title:</div>
					<input type='text' name='title' onChange={this.updateValue} value={fightDetails.title} required/>
					<div>Type: </div> {/* make this a dropdown */}
					{/* <input type='text' name='type' onChange={this.updateValue} value={fightDetails.type} required/>
					<div>Rounds: </div>
					<select name='rounds' id='rounds' onChange={this.updateValue} value={fightDetails.rounds} required>
						<option value='5-rounds'>5-Rounds</option>
						<option value='3-rounds'>3-Rounds</option>
					</select>
					<h5>Player 1</h5>
					<select name='player1' onChange={this.updateValue} required>
						<option value="none">select</option>
						{
							players.map(player=>(<option key={player._id} value={player._id} >{player.name}</option>))
						}
					</select>
					<h5>Player 2</h5>
					<select name='player2' onChange={this.updateValue} required>
						<option value="none">select</option>
						{
							players.map(player=>(<option key={player._id} value={player._id} >{player.name}</option>))
						}
					</select>
					<br />
					<button type="submit">Submit</button>
                    </form> */   }
			</div>
		);
    }
}


const mapStateToProps = ( state ) => {
	return {
		players: state.players,
		event: state.event
	}
}

export default connect(mapStateToProps)(Prediction);
