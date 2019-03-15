import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Banner extends Component {
	render() {
		const player1 = this.props.fight.player1.image;
		const player2 = this.props.fight.player2.image;
		return (
			<div className='banner-page'>
				<div className='banner-image'>
					<div className='left-image'>
						<img className='left-img-size' src={player1} />
						<img className='right-img-size' src={player2} />
					</div>
					<div className='info-section'>
						<div className='fight-info'>
							<h1>vishva vs rohit</h1>
							<p>dharamshala</p>
							<div className='predict-btn'>
								<Link to='#'>
									<button className='banner-predict-btn'>Prediction</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Banner);
