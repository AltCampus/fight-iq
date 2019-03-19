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
					checked={this.props.type == "Knockout"} 
					value="Knockout"/>Knockout

					 <input type="radio" 
					 name="type" 
					 onChange={this.handleSubmit} 
					 checked={this.props.type == "Submission"} 
					 value="Submission"/>Submission

					 <input 
					 type="radio" 
					 name="type" 
					 onChange={this.handleSubmit} 
					 checked={this.props.type == "Decision"} 
					 value="Decision"/>Decision
				</div>
		);
	}
}

export default connect()(PredictType);
