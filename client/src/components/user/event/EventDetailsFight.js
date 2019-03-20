import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePrediction, getEvent } from './../../../actions'
import './style.scss';

class EventDetailsFight extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			prediction: {
				winner: "",
				type: "",
				round: ""
				},
		  isPredicted: false
		};
		}

	componentDidMount() {

		if (Object.keys(this.props.user).length != 0) {

			let predictData = this.props.user.predictions.find(v=>v.fightid._id===this.props.fight._id);
				if(predictData) {
					this.setState({
						isPredicted: true,
						prediction:{
							id: predictData._id,
							winner : predictData.winner.name,
							type: predictData.type,
							round: predictData.round
						}
					})
				} 
				
		}
	}

	handleDelete = () => {
		let predictionid = this.state.prediction.id;
		this.props.dispatch(deletePrediction(predictionid, (deleteStatus) => {
			if(deleteStatus) {
				this.props.dispatch(getEvent(this.props.match.params.eventid));
			}
		}));
	
	};

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/events/' + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
		let {eventid, fight} = this.props;
		let player1NameSplit = fight.player1.name.split(" ");
		let player2NameSplit = fight.player2.name.split(" ");

		return (
			<div className="EventDetailsFight">
				<div className="player1-content">
					<img src={fight.player1.image} />
					<div className="player1-details">
						<div className="player-name">{fight.player1.name}</div>
					</div>
				</div>
				<div className="mid-section">
				VS
				</div>
				<div className="player2-content">
					<div className="player2-details">
						<div className="player-name">{fight.player2.name}</div>
					</div>
					<img src={fight.player2.image} />
				</div>

				{
					this.state.isPredicted 
					?
					<div className="prediction">
						<div className="prediction-header">
							<h3>Your Prediction: </h3>
							<Link to={{pathname:'/events/' + eventid + '/fights/' + fight._id + '/predict/'+this.state.prediction.id+'/edit', state: fight}}>
								<i className="fas fa-edit"></i>
							</Link>
							<i onClick={(e) => this.props.delete(e, this.state.prediction.id)} className="fas fa-trash-alt"></i>
						</div>
						<div className="prediction-details">
							<div className="winner-name">Winner: {this.state.prediction.winner}</div>
							<div className="winner-type">Type: {this.state.prediction.type}</div>
							<div className="winner-round">Round: {this.state.prediction.round}</div>
						</div>
					</div>

					:
					<div className="prediction">
						<div className="prediction-btns">
							<Link to={{pathname:'/events/' + eventid + '/fights/' + fight._id + '/predict', state: fight}}>
								<button>Predict</button>
							</Link>
						</div>
					</div>
			}
			</div>

						
		);
	}
}	

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};


	export default withRouter(connect(mapStateToProps)(EventDetailsFight));