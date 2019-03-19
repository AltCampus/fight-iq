import React, { Component } from "react";
import { connect } from "react-redux";
import { addPrediction, getUser } from "./../../../actions"
import PredictChooseFighter from './PredictChooseFighter';
import PredictType from './PredictType';
import PredictRound from './PredictRound';
import './style.scss';

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
			showPredictType : true,
			showPredictRound: true,
			showButton: false,
			user:{}
		};
	}

		componentDidMount() {
				this.props.dispatch(getUser())
		}

		componentDidUpdate(prevProps) {
			if (Object.keys(this.state.user).length === 0) {
					this.setState({	
					user:{...this.props.user}
				}, () => {
					let predictData = this.state.user.predictions.find(v=>v.fightid._id===this.state.prediction.fightid);
				if(predictData) {
					this.setState({
						prediction: {
						...this.state.prediction,
						winner : predictData.winner._id,
						type: predictData.type,
						round: predictData.round
						},
						showPredictType : true,
			showPredictRound: true,
			showButton: true,
					}) // end of inner setState
				} // end of inner if 
				}); // end of outer setState
			} // end of main if
		} // end of componentDidUpdate

		updateValue=(name, value, show) => {
			this.setState({
				prediction: {
					...this.state.prediction,
					[name]: value
				},
				[show]:true
			});
		}


	  handleSubmit = e => {
			console.log(this.state)
		e.preventDefault();
		this.props.dispatch(
		  addPrediction(this.state.prediction, this.redirectUser)
		);
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
		return (
				<div className='Predict'>
				 <form onSubmit={this.handleSubmit}>
					<PredictChooseFighter player1 = {fight.player1} player2 = {fight.player2} data={this.updateValue} winner = {this.state.prediction.winner}/>	
						{this.state.showPredictType? <PredictType data={this.updateValue} type = {this.state.prediction.type} />:null}	
						{this.state.showPredictRound? <PredictRound data={this.updateValue} round = {this.state.prediction.round}/> :null}
						{this.state.showButton? <button type="submit">Submit</button> :null}
					</form>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
				event : state.event,
				user : state.user
    }
}

export default connect(mapStateToProps)(Predict);
