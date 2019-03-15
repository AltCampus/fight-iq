import React, { Component } from "react";
import { connect } from "react-redux";
import PredictChooseFighter from './PredictChooseFighter';
import PredictType from './PredictType';
import PredictRound from './PredictRound';

class Predict extends Component {
	render() {
		return (
				<div className='Predict'>
					<PredictChooseFighter />	
					<PredictType />
					<PredictRound />
					<button>Submit</button>
				</div>
		);
	}
}

export default connect()(Predict);
