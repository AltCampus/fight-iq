import React, { Component } from "react";
import { connect } from "react-redux";
import { addPrediction } from "./../../../actions"
import PredictChooseFighter from './PredictChooseFighter';
import PredictType from './PredictType';
import PredictRound from './PredictRound';

class Predict extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  prediction: {
			eventid: this.props.match.params.eventid,
			fightid: this.props.match.params.fightid,
			winner: "",
			type: "",
			round: ""
		  },
		};
		}

	  handleSubmit = e => {
			console.log(this.state)
		e.preventDefault();
		this.props.dispatch(
		  addPrediction(this.state.prediction, this.redirectUser)
		);
		};
		
		updateValue = e => {
			console.log(e.target.name,e.target.value)
			this.setState({
				prediction: {
					...this.state.prediction,
					[e.target.name]: e.target.value
				}
			});
		};

	redirectUser = (success, errorMsg = "") => {
	if (success) {
		this.props.history.push(`/events/${this.props.match.params.eventid}`);
	} else {
		this.setState({
		error: errorMsg
		});
	}
	};
	

	render() {
		let fight = this.props.location.state;
		let players = this.props.players;
		console.log(players,"players");
		console.log(fight, "fight")
		return (
				<div className='Predict'>
				 <form onSubmit={this.handleSubmit}>
					<PredictChooseFighter player1 = {fight.player1} player2 = {fight.player2} />	
					<div>Player: </div>
          <input type="radio" name="winner" onChange={this.updateValue} value={fight.player1._id} />{fight.player1.name}
          <input type="radio" name="winner" onChange={this.updateValue} value={fight.player2._id} />{fight.player2.name}
					
					<PredictType />
					<div>Type: </div>
          <input type="radio" name="type" onChange={this.updateValue} value="Knockout"/>Knockout
          <input type="radio" name="type" onChange={this.updateValue} value="Submission" />Submission
									

					<PredictRound />
					<div>Round: </div>
          <input type="radio" name="round" onChange={this.updateValue} value="1st" />1st Round
          <input type="radio" name="round" onChange={this.updateValue} value="2nd" />2nd Round
					<input type="radio" name="round" onChange={this.updateValue} value="3rd" />3rd Round

					<button>Submit</button>
					</form>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        event : state.event
    }
}

export default connect(mapStateToProps)(Predict);
