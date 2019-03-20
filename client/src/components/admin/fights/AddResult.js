import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addResult, editResult } from "../../../actions";

class AddFight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resultDetails: {
				winner: "",
				type: "",
				round: ""
			},
			error: "",
			isEdit: false
		};
	}

	componentDidMount() {
		let isEdit = /edit/g.test(this.props.location.pathname)
		this.setState({
			isEdit: isEdit
		})

		let fight = this.props.event.fight.find(fight=>fight._id===fightid);
		let { fightid } = this.props.match.params;

		if (isEdit){
			let fight = this.props.event.fight.find(fight=>fight._id===fightid);
			this.setState({
				resultDetails: {
					...this.state.resultDetails,
					winner: fight.result.winner ,
					type: fight.result.type ,
					rounds:  fight.result.rounds
				}
			})
		}
	}

	updateValue = (e) => {
		this.setState({
			resultDetails: {
				...this.state.resultDetails,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.state.isEdit){
			let { fightid } = this.props.match.params;
			this.props.dispatch(editResult(this.state.resultDetails, fightid, this.redirectUser));
		} else {
			let { fightid } = this.props.match.params;
			this.props.dispatch(addResult(this.state.resultDetails, fightid, this.redirectUser));
		}
	};

	redirectUser = (success, errorMsg = "") => {
		const eventId = this.props.match.params.eventid;
		if (success){
			this.props.history.push(`/admin/event/${eventId}`);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
		let { resultDetails } = this.state; 
		let { fightid } = this.props.match.params;
		let fight = this.props.event.fight.find(fight=>fight._id===fightid);

		return (
				<div className='AddFight'>
				<form onSubmit={this.handleSubmit}>
					<div>Winner:</div>
					<select name="winner" onChange={this.updateValue}>
							<option value="null">select</option>
							<option value={fight.player1._id}>{fight.player1.name}</option>
							<option value={fight.player2._id}>{fight.player2.name}</option>
					</select>
					<div>Type: </div>
					<select name='type' onChange={this.updateValue} required>
						<option value="null">select</option>
						<option value='ko'>KO/TKO</option>
						<option value='submission'>Submission</option>
						<option value='decision'>Decision</option>
					</select>
					<div>Round: </div>
					<select name='round' onChange={this.updateValue} required>
						<option value="null">select</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<br />
					<button type="submit">Submit</button>
				</form>
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

export default connect(mapStateToProps)(AddFight);
