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

					<input type="radio" id="first" name="round" onChange={this.handleSubmit} checked={round == "first"} value="first" />
					<label className={round=="first"? "select":""} htmlFor="first">1st Round</label>
					<input type="radio" id="second" name="round" onChange={this.handleSubmit} checked={round == "second"} value="second" />
					<label className={round=="second"? "select":""} htmlFor="second">2nd Round</label>
					<input type="radio" id="third" name="round" onChange={this.handleSubmit} checked={round == "third"} value="third" />
					<label className={round=="third"? "select":""} htmlFor="third">3rd Round</label>

				</div>
		);
	}
}

export default connect()(PredictRound);
