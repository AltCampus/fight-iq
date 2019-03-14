import React, { Component } from 'react';
import {connect} from "react-redux"
import {getEvents} from '../../actions/event'


class Fight extends Component {
  constructor(){
    super();
    this.state = {
      currentIndex: 0
    }
  }

  handleNextFight = () => {
    const maxIndex = this.props.data.length - 1;
    console.log(this.state.currentIndex);

    this.setState(state => {
      const nextIndex = state.currentIndex >= maxIndex ? 0 : state.currentIndex + 1;
      return {
        currentIndex: nextIndex
      }
    })
  }

  handlePrevFight = () => {
    const maxIndex = this.props.data.length - 1;
    this.setState(state => {
      return {
        currentIndex: state.currentIndex <= 0 ? maxIndex : state.currentIndex - 1
      }
    })
  }


  render() {
    const fight = this.props.data;
    const event = this.props.event;
    return (
      <div className="fight-card">
        <div>
          <img src={fight[this.state.currentIndex].player1.image} />
          <img src={fight[this.state.currentIndex].player2.image} />
          <div>{fight[this.state.currentIndex].title}</div>
        </div>
      <button className="nextfight-btn" onClick={this.handleNextFight}>Next</button>
      <button className="prevfight-btn" onClick={this.handlePrevFight}>Prev</button>
      </div>
    )
  }
}



export default connect()(Fight);