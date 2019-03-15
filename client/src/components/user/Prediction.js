import React, { Component } from "react";
import { connect } from "react-redux";
import { addPrediction } from "./../../actions";

class Prediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: {
        eventid: this.props.match.params.eventid,
        fightid: this.props.match.params.fightid,
        winner: "",
        type: "",
        round: ""
      },
      players:[]

    };
  }

  updateValue = e => {
    this.setState({
      prediction: {
        ...this.state.prediction,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addPrediction(this.state.prediction, this.redirectUser)
    );
  };

  redirectUser = (success, errorMsg = "") => {
    if (success) {
      this.props.history.push(`/events/${this.props.match.params.eventid}`);
    } else {
      this.setState({
        error: errorMsg
      });
    }
  };

  render() {
    let fight = this.props.location.state;
    let players = this.props.players;

    return (
      <div className="Pridiction">
        <form onSubmit={this.handleSubmit}>
          <div>Winner</div>
          <h5>Player 1</h5>
          <select name="winner" onChange={this.updateValue} required>
            <option value="none">select</option>
            {players.map(player => (
              <option key={player._id} value={player._id}>
                {player.name}
              </option>
            ))}
          </select>
          <div>Type: </div>
          <select
            name="type"
            id="type"
            onChange={this.updateValue}
            value={this.state.type}
            required
          >
            <option value="knockout">Knockout</option>
            <option value="submission">Submission</option>
          </select>

          <select
            name="round"
            id="round"
            onChange={this.updateValue}
            value={this.state.round}
            required
          >
            <option value="5thround">5th Round</option>
            <option value="3rdround">3rd Round</option>
          </select>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        event : state.event
    }
}

export default connect(mapStateToProps)(Prediction);
