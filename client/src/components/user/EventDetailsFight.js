import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

class Fight extends Component {
	

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/event/' + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
		let {eventid, fight} = this.props;
		console.log(fight)
		return (
			<div className="Fight">
				<img src={fight.player1.image} /><span>{fight.player1.name}</span>
				<img src={fight.player2.image} /><span>{fight.player2.name}</span>
				<div className="title">{fight.title}</div>
				<div className="type">Type: {fight.type}</div>
				<div className="rounds">Rounds: {fight.rounds}</div>
				
				<div className="predict-btn"> 
					{
						(!fight.isPredicted) ? 
						<div className="bottom-section">
							<Link to={{pathname:'/events/' + eventid + '/fights/' + fight._id + '/predict', state: fight}}>
								<i className='far fa-plus-square' /> Predict
							</Link>
						</div> : 
						<div className="bottom-section">
							<Link to={{pathname:'/events/' + eventid + '/fights/' + fight._id + '/edit', state: fight}}>
								<i className='far fa-plus-square' /> Edit Predict
							</Link>	
							<Link to={'/'}>
								<i className='far fa-plus-square' /> Delete
							</Link>	
						</div>
					}
				</div>
			</div>
		);
	}
}	

	export default withRouter(connect()(Fight));