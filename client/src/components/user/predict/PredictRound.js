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
					checked={this.props.type == "1st"} 
					value="1st" />1st Round

					<input 
					type="radio" 
					name="round" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "2nd"} 
					value="2nd" />2nd Round

					<input 
					type="radio" 
					name="round" 
					onChange={this.handleSubmit} 
					checked={this.props.type == "3rd"} 
					value="3rd" />3rd Round

				</div>
		);
	}
}

export default connect()(PredictRound);
