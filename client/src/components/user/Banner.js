import React, { Component } from 'react';
import {connect} from "react-redux"

class Banner extends Component {

  render() {
    const player1 = this.props.fight.player1.image;
    const player2 = this.props.fight.player2.image;
    return (
      <div className="banner-page">
        <div className="banner-image">
         <img src={player1} />
         <img src={player2} />
        </div>
      </div>
    )
  }
}


export default connect()(Banner);