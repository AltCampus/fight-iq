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
		console.log(this.props, "props")
		return (
				<div className='PredictChooseFighter'>
					<div className='img-section'>
					<div className='player1'>
						<img src={this.props.player1.image} />
					</div>
					<div className='player2'>
					<img src={this.props.player2.image} />
					</div>
					</div>
					<input 
					type="radio" 
					name="winner" 
					onChange={this.handleSubmit}
					checked={this.props.player1._id == this.props.winner} 
					value={this.props.player1._id}/>{this.props.player1.name}

					 <input 
					 type="radio" 
					 name="winner" 
					 onChange={this.handleSubmit} 
					 checked={this.props.player2._id == this.props.winner}
					 value={this.props.player2._id}/>{this.props.player2.name}
					
				</div>
		);
	}
}

export default connect()(PredictChooseFighter);
