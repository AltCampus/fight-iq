import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
import { Link } from "react-router-dom";
import Fight from "./Fight";
import Banner from "./Banner";

class EventCards extends Component {
	componentDidMount() {
		this.props.dispatch(getEvents());
	}

	render() {
		const { events, isLogged } = this.props;
		console.log(events);
		return (
			<div className='main-page'>
				<div>
					{events.length != 0 ? (
						<Banner fight={events[0].fight[0]} events={events} />
					) : (
						""
					)}
				</div>

				<section className='events-page'>
					<div className='events-header'>
						<h1>Upcoming Events</h1>
						<h1>PAST EVENTS</h1>
					</div>
					<div className='main-event-page'>
						<div>
							{events &&
								events.map((event, index) => (
									<div className='' key={index}>
										{!event.isExpired ? (
											<div className='fight-cards'>
												<div className='event-title '>
													{isLogged ? (
														<div>
															<Link to={`events/${event._id}`}>
																<p className='title'>{event.title}</p>
															</Link>
														</div>
													) : (
														<div>
															<Link to={`/login`}>
																<p className='title'>{event.title}</p>
															</Link>
														</div>
													)}
												</div>
												<div className='fight-component'>
													<Fight data={event.fight} />
												</div>
												<div className='location-info'>
													<p className='txt-dec'>{event.date_time}</p>
													<p className='title-location'>{event.location}</p>
												</div>

												<div>
													{isLogged ? (
														<div className='predict-btn'>
															<Link to={`events/${event._id}`}>
																<button className='Prediction-button'>
																	Predict
																</button>
															</Link>
														</div>
													) : (
														<div>
															<Link to='/login'>
																<button className='Prediction-button'>
																	Predict
																</button>
															</Link>
														</div>
													)}
												</div>
											</div>
										) : null}
									</div>
								))}
						</div>
						<div className='past-events'>
							{events &&
								events.map((event, index) => (
									<div className='' key={index}>
										{event.isExpired ? (
											<div className=''>
												<div className='event-list'>
													<Link to={`events/${event._id}`}>
														<p className='past-event-title'>{event.title}</p>
													</Link>
												</div>
											</div>
										) : null}
									</div>
								))}
						</div>
					</div>
					<div className='load-more-events'>
						<button className='load-more'>load more</button>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events,
		isLogged: state.isLogged
	};
};

export default connect(mapStateToProps)(EventCards);
