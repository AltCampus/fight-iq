  
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
import {Link} from "react-router-dom"
import Fight from "./Fight";
import Banner from "./homepage/Banner";

class EventCards extends Component {
	componentDidMount() {
		this.props.dispatch(getEvents());
	}

	render() {
		const { events } = this.props;
    const upcomingEvents = events.filter(event=>!event.isExpired);
    const pastEvents = events.filter(event=>event.isExpired);
    const heroEvent = upcomingEvents.sort((a,b)=>a.date_time-b.date_time).find(event=>event.isMajor)
                      || upcomingEvents.sort((a,b)=>a.date_time-b.date_time)[0]; // if no upcoming major events
    return (
			<div className='main-page'>
				<div>
          {heroEvent && <Banner fight={heroEvent.fight[0]} event={heroEvent}/>}
				</div>

				<section className='events-page'>
          <div className="events-header">
					 <h1>Upcoming Events</h1><h1>PAST EVENTS</h1>
          </div>
					<div className='main-event-page'>
						<div>
							{events &&
								events.map((event) => (
									<div className="">
                    {
                    (!event.isExpired) ?
                      (<div className='fight-cards'>
    										<div className='event-title '>
                        <Link to={`events/${event._id}`}>
    											<p className='title'>{event.title}</p>
                        </Link>
    										</div>
    										<div className='fight-component'>
    											<Fight data={event.fight} />
    										</div>
    										<div className='location-info'>
    											<p className='txt-dec'>{event.date_time}</p>
    											<p className='title-location'>{event.location}</p>
    										</div>

    										<div className='predict-btn'>
    											<Link to={`events/${event._id}`}><button className='Prediction-button'>Predict</button></Link>
    										</div>
                      </div>) : null
                    }
									</div>
								))
              }
						</div>
						<div className='past-events'>
            {
              events && events.map(event => (
                <div className=''>
                  {
                    (event.isExpired) ?
                      <div className=''>
                        <div className='event-list'>
                          <Link to={`events/${event._id}`}>
                            <p className='past-event-title'>{event.title}</p>
                          </Link>
                        </div>
                      </div> : null
                  }  
                </div>
              ))
            }
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events
	};
};

export default connect(mapStateToProps)(EventCards);