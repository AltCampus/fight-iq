import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetailedEvent extends Component {
	render() {
		let {event} = this.props;
		let mainFight = event.fight && event.fight.find(fight=>fight.type=='mainEvent');

		let eventDate = event.date_time && event.date_time.split('T')[0];
		let eventTime = event.date_time && event.date_time.split('T')[1];
		console.log(mainFight)
		return (
	          <Link to={`events/${event._id}`}>
							<div className='DetailedEvent'>
			    			<div className='event-title'>{event.title}</div>
			    					<div className='event-images'>
											<img className='player-1' src={mainFight.player1.image}/>
											<img className='player-2' src={mainFight.player2.image}/>
										</div>
								<div className='location-info'>
									<p className='txt-dec'>{eventTime}, {eventDate} </p>
									<p className='title-location'>{event.location}</p>
								</div>
								<button className='Prediction-button'>Predict</button>
	            </div>
	          </Link>
			);
		}
	}

	export default DetailedEvent;
