import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Banner extends Component {
	render() {
		let { fight, event, isLogged } = this.props;
		const player1 = fight.player1.image;
		const player2 = fight.player2.image;

		return (
			<div className='banner-page'>
				<div className='banner-image'>
					<img className='left-img-size' src={player1} />
					<img className='right-img-size' src={player2} />
				</div>
				<div className='info-section'>
					<p className='hero-event-title'>{event.title}</p>
					<h1>{this.props.fight.title}</h1>
					<div>
						{isLogged ? (
							<Link to={`events/${event._id}`}>
								<button className='banner-predict-btn'>Predict</button>
							</Link>
						) : (
							<Link to={"/login"}>
								<button className='banner-predict-btn'>Predict</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.user.isLogged
	};
};

export default connect(mapStateToProps)(Banner);
