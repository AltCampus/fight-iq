  
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "./../../../actions/event";
import {Link} from "react-router-dom"
import Banner from "./Banner";
import DetailedEvent from "./DetailedEvent";
import SimpleEvent from "./SimpleEvent";

class Homepage extends Component {
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
      <div className="Homepage">
        {heroEvent && <Banner fight={heroEvent.fight[0]} event={heroEvent}/>}
        <div className="upcomingEvents">
          <h1>Upcoming Events</h1>
          {upcomingEvents.map(event=><DetailedEvent key={event._id} event={event}/>)}
        </div>
        <div className="pastEvents">
          <h1>Past Events</h1>
          {pastEvents.map(event=><SimpleEvent key={event._id} event={event}/>)}
        </div>
      </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events
	};
};

export default connect(mapStateToProps)(Homepage);