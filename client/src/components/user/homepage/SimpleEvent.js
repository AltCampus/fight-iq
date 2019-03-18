import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SimpleEvent extends Component {
	render() {
		let {event} = this.props
		return (
						<div className=''>
              <div className='event-list'>
              <Link to={`events/${event._id}`}>
                <p className='past-event-title'>{event.title}</p>
              </Link>
            </div>
          </div>
			);
		}
	}

	export default SimpleEvent;