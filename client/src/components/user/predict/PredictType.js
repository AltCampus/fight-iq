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
					<input type="radio" id="knockout" name="type" onChange={this.handleSubmit} checked={type == "knockout"} value="knockout"/>
					<label className={type=="knockout"? "select":""} htmlFor="knockout">Knockout</label>
					<input type="radio" id="submission" name="type" onChange={this.handleSubmit} checked={type == "submission"} value="submission"/>
					<label className={type=="submission"? "select":""} htmlFor="submission">Submission</label>
					<input type="radio" id="decision" name="type" onChange={this.handleSubmit} checked={type == "decision"} value="decision"/>
					<label className={type=="decision"? "select":""} htmlFor="decision">Decision</label>
				</div>
		);
	}
}

export default connect()(PredictType);
