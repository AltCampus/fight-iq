import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFight, getEvent, deleteResult } from "./../../../actions";
import "./style.scss";

class Fight extends Component {
	handleDelete = () => {
		let { eventid, fight } = this.props;
		this.props.dispatch(deleteFight(eventid, fight._id, this.redirectUser));
	};

	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.dispatch(getEvent(this.props.eventid));
			this.props.history.push("/admin/event/" + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			});
		}
	};

	// handleResultEdit = () =>{
	// 	// TODO: handle result edit
	// 	console.error("Edit still needs to be handled")
	// }

	handleResultDelete = () => {
		let fightid = this.props.fight._id;
		this.props.dispatch(deleteResult(fightid, this.redirectUser));
	};

	render() {
		let { eventid, fight } = this.props;
		return (
			<div className='Fight'>
				<div className='title'>{fight.title}</div>
				<div className='type'>Type: {fight.type}</div>
				<div className='rounds'>Rounds: {fight.rounds}</div>
				<div className='fight-result-main'>
					Results:
					{fight.result ? (
						<div className='fight-result'>
							<div className='fight-result-winner'>
								Winner: {fight.result.winner.name}
							</div>
							<div className='fight-result-type'>Type: {fight.result.type}</div>
							<div className='fight-result-round'>
								Round: {fight.result.round}
							</div>
						</div>
					) : (
						<div className='fight-result'>Result not added yet!</div>
					)}
				</div>

				<div className='bottom-section'>
					<Link to={"/admin/" + eventid + "/fights/" + fight._id + "/edit"}>
						<i className='fas fa-edit' /> Edit
					</Link>
					<Link to={"/admin/event/" + eventid} onClick={this.handleDelete}>
						<i className='fas fa-trash-alt' /> Delete
					</Link>
					{/* TODO: make the result buttons display conditional according to results */}

					<Link to={"/admin/" + eventid + "/fights/" + fight._id + "/result"}>
						<i className='far fa-plus-square' /> Add result
					</Link>
					<a onClick={this.handleResultEdit}>
						<i className='fas fa-edit' /> Edit result
					</a>
					<a onClick={this.handleResultDelete}>
						<i className='fas fa-trash-alt' /> Delete result
					</a>
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(Fight));
