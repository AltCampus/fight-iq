  
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";
import Fight from "./Fight";
import Banner from "./Banner";

class EventCards extends Component {
	componentDidMount() {
		this.props.dispatch(getEvents());
	}

	render() {
		const { events } = this.props;
		console.log(events);
		return (
			<div className='main-page'>
				<div>
					{events.length != 0 ? <Banner fight={events[0].fight[0]} /> : ""}
				</div>

				<section className='events-page'>
					<h1>Event</h1>
					<div className='main-event-page'>
						<div>
							{events &&
								events.map((event) => (
									<div className='fight-cards'>
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
											<button className='Prediction-button'>Prediction</button>
										</div>
									</div>
								))}
						</div>
						<div className='past-events'>
							<p>past</p>
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