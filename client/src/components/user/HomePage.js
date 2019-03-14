import React, { Component } from 'react';
import {connect} from "react-redux"
import {getEvents} from '../../actions/event';
// import img1 from '../image/img1.jpeg';

class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch(getEvents());
  }


  render() {
    const {events, players} = this.props;
    console.log(events)
    return (
      <div className="home-page">
        <div className="events-list">
          { 
            events.map(event => 
              <h1>{event.title}</h1>
              ) 
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.events
  }
}

export default connect(mapStateToProps)(HomePage);
