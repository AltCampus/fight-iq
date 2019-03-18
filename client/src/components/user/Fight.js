  
import React, { Component } from "react";
import { connect } from "react-redux";

class Fight extends Component {
	render() {
		const fight = this.props.data;
		return (
			<div className='fight-card'>
				<div className='player-images'>
					<div className='image-section'>
						<img className='player-1' src={fight.player1.image}/>
						<img className='player-2' src={fight.player2.image}/>
					</div>
				</div>
				<div>
				</div>
			</div>
		);
	}
}

export default connect()(Fight);