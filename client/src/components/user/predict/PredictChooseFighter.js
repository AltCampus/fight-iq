import React, { Component } from "react";
import { connect } from "react-redux";

class PredictChooseFighter extends Component {
	render() {
		console.log(this.props, "props")
		return (
				<div className='PredictChooseFighter'>
					<div className='img-section'>
					<div className='player1'>
						<img src={this.props.player1.image} />
						<p>{this.props.player1.name}</p>
					</div>
					<div className='player2'>
					<img src={this.props.player2.image} />
						<p>{this.props.player2.name}</p>
					</div>
					</div>
				</div>
		);
	}
}

export default connect()(PredictChooseFighter);
