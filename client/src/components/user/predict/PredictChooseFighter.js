import React, { Component } from "react";
import { connect } from "react-redux";

class PredictChooseFighter extends Component {

	componentDidMount(){
		if(this.props.winner)
		this.props.data("winner",this.props.winner, "showPredictType")
	}

	handleSubmit= (e) => {
		this.props.data(e.target.name,e.target.value, "showPredictType")
	}

	render() {
		let { winner, player1, player2 } = this.props;
		return (
				<div className='PredictChooseFighter'>
					<h1>Choose a fighter</h1>
					<div className='player-section'>
						<div className={`player player1 ${winner==player1._id? 'select':null}`}>
							<label htmlFor="winner1">
								<img src={player1.image} />
								<div className="player-name player1-name">{player1.name}</div>
							</label>
							<input type="radio" id="winner1" name="winner" onChange={this.handleSubmit} checked={player1._id == winner} value={player1._id}/>
						</div>
						<div className={`player player2 ${winner==player2._id? 'select':null}`}>
							<label htmlFor="winner2">
								<img src={player2.image} />
								<div className="player-name player2-name">{player2.name}</div>
							</label>
							<input type="radio" id="winner2" name="winner" onChange={this.handleSubmit} checked={player2._id == winner} value={player2._id}/>
						</div>
					</div>
				</div>
		);
	}
}

export default connect()(PredictChooseFighter);
