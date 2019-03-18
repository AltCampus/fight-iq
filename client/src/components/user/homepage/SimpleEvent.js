import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SimpleEvent extends Component {
	render() {
		let {event} = this.props
		console.log(event)
		return (
            <div className='SimpleEvent'>
              <Link to={`events/${event._id}`}>
                <p className='past-event-title'>{event.title}</p>
                <p className="past-event-main-event">{event.main_event}</p>
              </Link>
            </div>
			);
		}
	}

	export default SimpleEvent;