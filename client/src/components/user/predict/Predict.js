import React, { Component } from "react";
import { connect } from "react-redux";
import { addPrediction, getUser, editPrediction } from "./../../../actions"
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
			isEdit:false,
			user:{}
		};
	}

		componentDidMount() {			
				let isEdit = /edit/g.test(this.props.location.pathname)
				this.setState({
					isEdit: isEdit
				})
				if(isEdit) {
					let predictData = this.props.user.predictions.find(v=>v.fightid._id===this.state.prediction.fightid);
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
							showButton: true
						}) // end of inner setState
					} // end of inner if 
					} // end of outer if
	
}

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
		e.preventDefault();
		if(this.state.isEdit== true) {
			this.props.dispatch(
				editPrediction(this.state.prediction,this.props.match.params.predictid, this.redirectUser)
			);
		}
		else
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
