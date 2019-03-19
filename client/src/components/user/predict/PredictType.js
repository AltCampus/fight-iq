import React, { Component } from "react";
import { connect } from "react-redux";


class PredictType extends Component {
	handleSubmit= (e) => {
		this.props.data(e.target.name,e.target.value, "showPredictRound")
	}
	render() {
		return (
				<div className='PredictType'>
				<div>Type :</div>
					<input type="radio" 
					name="type" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "knockout"} 
					value="knockout"/>Knockout

					 <input type="radio" 
					 name="type" 
					 onChange={this.handleSubmit} 
					 checked={this.props.type == "submission"} 
					 value="submission"/>Submission

					 <input 
					 type="radio" 
					 name="type" 
					 onChange={this.handleSubmit} 
					 checked={this.props.type == "decision"} 
					 value="decision"/>Decision
				</div>
		);
	}
}

export default connect()(PredictType);
