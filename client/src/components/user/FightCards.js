import React, { Component } from 'react';
import {connect} from "react-redux"
import {getEvents} from '../../actions/admin'


class FightCards extends Component {
  render() {
    const {events} = this.props;
    console.log(events)
    return (
      <div className="main-page">
        <h1>Fight Cards</h1>
        <div className="fight-cards">
          <div>
            <p>{events.title}</p>
          </div>
          <div>
            image
            <img src=""/>
          </div>
          <div>
            <h3>TILL VS MASVIDAL</h3>
            <span>{events.date_time}</span><span>{events.main_events}</span>
            <p>{events.location}</p>
          </div>
          <div>
            <button>Predict</button>
          </div>
        </div>

        <div className="fight-cards">
          <div>
            <p>{events.title}</p>
          </div>
          <div>
            image
            <img src=""/>
          </div>
          <div>
            <h3>TILL VS MASVIDAL</h3>
            <span>{events.date_time}</span><span>{events.main_events}</span>
            <p>{events.location}</p>
          </div>
          <div>
            <button>Predict</button>
          </div>
        </div>

        <div className="fight-cards">
          <div>
            <p>{events.title}</p>
          </div>
          <div>
            image
            <img src=""/>
          </div>
          <div>
            <h3>TILL VS MASVIDAL</h3>
            <span>{events.date_time}</span><span>{events.main_events}</span>
            <p>{events.location}</p>
          </div>
          <div>
            <button>Predict</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.event
  }
}

export default connect(mapStateToProps)(FightCards);
