import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fight from './Fight';

class DetailedEvent extends Component {
	render() {
		let {event} = this.props
		return (
						<div className='fight-cards'>
	            <Link to={`events/${event._id}`}>
	    					<div className='event-title '>
		    						<p className='title'>{event.title}</p>
	    					</div>
								<div className='fight-component'>
									<Fight data={event.fight} />
								</div>
								<div className='location-info'>
									<p className='txt-dec'>{event.date_time}</p>
									<p className='title-location'>{event.location}</p>
								</div>

								<div className='predict-btn'>
									<button className='Prediction-button'>Predict</button>
								</div>
	            </Link>
            </div>
			);
		}
	}

	export default DetailedEvent;
