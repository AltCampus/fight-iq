import React, { Component } from "react";
import { connect } from "react-redux";


class PredictRound extends Component {

	handleSubmit= (e) => {
		this.props.data(e.target.name,e.target.value, "showButton")
	}

	render() {
		let { round } = this.props;
		return (
				<div className='PredictRound'>
					<input type="radio" id="first" name="round" onChange={this.handleSubmit} checked={round == "1st"} value="1st" />
					<label className={round=="1st"? "select":""} htmlFor="first">1st Round</label>
					<input type="radio" id="second" name="round" onChange={this.handleSubmit} checked={round == "2nd"} value="2nd" />
					<label className={round=="2nd"? "select":""} htmlFor="second">2nd Round</label>
					<input type="radio" id="third" name="round" onChange={this.handleSubmit} checked={round == "3rd"} value="3rd" />
					<label className={round=="3rd"? "select":""} htmlFor="third">3rd Round</label>
				</div>
		);
	}
}

export default connect()(PredictRound);
