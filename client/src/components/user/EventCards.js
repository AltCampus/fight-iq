import React, { Component } from 'react';
import {connect} from "react-redux";
import {getEvents} from '../../actions/event';
import Fight from './Fight';
// import Banner from './Banner';


class EventCards extends Component {
  componentDidMount() {
    this.props.dispatch(getEvents());
  }

  render() {
    const {events} = this.props;
    return (
      <div className="main-page">             
        <h1>Event Cards</h1>
        <div>
          {
            events && events.map(event => ( 
              <div className="fight-cards">
                <div>
                  <p>{event.title}</p>
                </div>
                <Fight data={event.fight}/>
                  <p>{event.date_time}</p>
                  <p>{event.location}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

export default connect(mapStateToProps)(EventCards);