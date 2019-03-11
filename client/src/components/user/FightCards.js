import React, { Component } from 'react';
import {connect} from "react-redux"
import {getEvents} from '../../actions/event'


class FightCards extends Component {
  constructor(){
    super();
    this.state = {
      currentIndex: 0
    }
  }
  handleNextFight = () => {
    const maxIndex = this.props.events.fight.length - 1;
    this.setState(state => {
      const nextIndex = state.currentIndex >= maxIndex ? 0 : state.currentIndex + 1;
      console.log(nextIndex)
      return {
        currentIndex: nextIndex
      }
    })
  }

  handlePrevFight = () => {
    const maxIndex = this.props.events.fight.length - 1;
    this.setState(state => {
      return {
        currentIndex: state.currentIndex <= 0 ? maxIndex : state.currentIndex - 1
      }
    })
  }

  componentDidMount() {
    this.props.dispatch(getEvents());
  }
  render() {
    const {events, players} = this.props;
    const { currentIndex } = this.state;
    const {title, rounds, type} = events.fight[currentIndex];
    console.log(players, "players")
    return (
      <div className="main-page">
        <h1>Fight Cards</h1>
        <div className="fight-cards">
          <div>
            <p>{events.title}</p>
          </div>
          <div>
          {
            players && players.map(player => 
              <img src={player.image}/>
            )
          }
            <button className="nextfight-btn" onClick={this.handleNextFight}>Next</button>
            <button className="prevfight-btn" onClick={this.handlePrevFight}>Prev</button>

          </div>          
          <div>
            <h3>{title}</h3>
            <span>{rounds}</span>
            <p>{type}</p>
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
          {
            players && players.map(player => 
              <img src={player.image}/>
            )
          }
            <button className="nextfight-btn" onClick={this.handleNextFight}>Next</button>
            <button className="prevfight-btn" onClick={this.handlePrevFight}>Prev</button>

          </div>          
          <div>
            <h3>{title}</h3>
            <span>{rounds}</span>
            <p>{type}</p>
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
          {
            players && players.map(player => 
              <img src={player.image}/>
            )
          }
            <button className="nextfight-btn" onClick={this.handleNextFight}>Next</button>
            <button className="prevfight-btn" onClick={this.handlePrevFight}>Prev</button>

          </div>          
          <div>
            <h3>{title}</h3>
            <span>{rounds}</span>
            <p>{type}</p>
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
    events: state.event,
    players: state.players.player
  }
}

export default connect(mapStateToProps)(FightCards);
