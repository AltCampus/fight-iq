import React, { Component } from "react";
import { connect } from "react-redux";


class PredictType extends Component {
	handleSubmit= (e) => {
		this.props.data(e.target.name,e.target.value, "showPredictRound")
	}
	render() {
		let { type } = this.props;
		return (
				<div className='PredictType'>
					<input type="radio" id="knockout" name="type" onChange={this.handleSubmit} checked={type == "Knockout"} value="Knockout"/>
					<label className={type=="Knockout"? "select":""} htmlFor="knockout">Knockout</label>
					<input type="radio" id="submission" name="type" onChange={this.handleSubmit} checked={type == "Submission"} value="Submission"/>
					<label className={type=="Submission"? "select":""} htmlFor="submission">Submission</label>
					<input type="radio" id="decision" name="type" onChange={this.handleSubmit} checked={type == "Decision"} value="Decision"/>
					<label className={type=="Decision"? "select":""} htmlFor="decision">Decision</label>
				</div>
		);
	}
}

export default connect()(PredictType);
