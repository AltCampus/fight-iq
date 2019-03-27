import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "./../../../actions/event";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import DetailedEvent from "./DetailedEvent";
import SimpleEvent from "./SimpleEvent";
import "./style.scss";
import { getUser } from "../../../actions";
import Spinner from "../../Spinner";

class Homepage extends Component {
	constructor (props){
		super(props);
		this.state = {
			events: [],
			upcomingEvents: [],
			pastEvents: [],
			heroEvent: {},
			heroIndex: 0,

		}
	}

	componentDidMount() {
		setTimeout(() => this.props.dispatch(getEvents()), 2000);

		const { events } = this.props;
		const upcomingEvents = events.filter((event) => !event.isExpired);
		const pastEvents = events.filter((event) => event.isExpired);
		const heroEvent =
			upcomingEvents
				.sort((a, b) => a.date_time - b.date_time)
				.find((event) => event.isMajor) ||
			upcomingEvents.sort((a, b) => a.date_time - b.date_time)[0]; // if no upcoming major events
		const heroIndex = upcomingEvents.indexOf(heroEvent);
		if (heroEvent != -1) {
			upcomingEvents.splice(heroIndex, 1);
		}

		this.setState({
			events,
			upcomingEvents,
			pastEvents,
			heroEvent,
			heroIndex
		})
	}

	render() {
		let { events, upcomingEvents, pastEvents, heroEvent, heroIndex} = this.state;
		return (
			<div>
				{events.length > 0 ? (
					<div className='Homepage'>
						{heroEvent && (
							<Banner fight={heroEvent.fight[0]} event={heroEvent} />
						)}
						<div className='Homepage-main'>
							<div className='upcomingEvents'>
								<h1>Upcoming Events</h1>
								{upcomingEvents.map((event) => {
									if (event.fight && event.fight.length > 0) {
										return <DetailedEvent key={event._id} event={event} />;
									}
									return null;
								})}
							</div>
							<div className='pastEvents'>
								<h1>Past Events</h1>
								{pastEvents.map((event) => {
									if (event.fight && event.fight.length > 0) {
										return <SimpleEvent key={event._id} event={event} />;
									}
									return null;
								})}
							</div>
						</div>
					</div>
				) : (
					<Spinner />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.event.events
	};
};

export default connect(mapStateToProps)(Homepage);
