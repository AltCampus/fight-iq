import React, { Component } from "react";
import { connect } from "react-redux";


class PredictRound extends Component {

	handleSubmit= (e) => {
		this.props.data(e.target.name,e.target.value, "showButton")
	}

	render() {
		return (
				<div className='PredictRound'>
				<div>Round:</div>
					<input type="radio" 
					name="round" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "first"} 
					value="first" />1st Round

					<input 
					type="radio" 
					name="round" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "second"} 
					value="second" />2nd Round

					<input 
					type="radio" 
					name="round" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "third"} 
					value="third" />3rd Round

				</div>
		);
	}
}

export default connect()(PredictRound);
