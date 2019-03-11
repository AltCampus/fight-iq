import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers } from "../../actions/player";

class DisplayPlayersList extends Component {
	componentDidMount() {
		this.props.dispatch(getPlayers());
	}
	render() {
		const { players } = this.props;
		console.log(players, "lsit of the players");
		return (
			<div className='display-list-of-players'>
				<div className='show-players-list'>
					{players &&
						players.map((val, index) => (
							<div key={index}>
								<p>{val.name}</p>
								<p>{val.weight}</p>
								<p>{val.height}</p>
								<img src={val.image} />
							</div>
						))}
				</div>
				<Link to='/admin/players/add'>
					<button className='add-player'>Add a player</button>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		players: state.players.player
	};
};

export default connect(mapStateToProps)(DisplayPlayersList);
