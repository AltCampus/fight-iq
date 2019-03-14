import React, { Component } from 'react';
import {connect} from "react-redux"

class Banner extends Component {


  render() {
    const {fight} = this.props;
    console.log(fight)
    return (
      <div className="banner-page">
        <div>
          <img src={fight.player1.image}/>
        </div>
      </div>
    )
  }
}


export default connect()(Banner);