import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers, deleteEvent } from "../../actions/player";

class DisplayPlayersList extends Component {
	handleDelete(e, id) {
		this.props.dispatch(
			deleteEvent(id, (deleteStatus) => {
				if (deleteStatus) {
					this.props.history.push("/admin/players");
				}
			})
		);
		this.props.dispatch(getPlayers());
	}
	componentDidMount() {
		this.props.dispatch(getPlayers());
	}

	render() {
		const { players } = this.props;
		return (
			<div className='display-list-of-players'>
				<div className='show-players-list'>
					{players &&
						players.map((val, index) => (
							<div key={index}>
								<p>Name :{val.name}</p>
								<p> Weight:{val.weight}</p>
								<p> Height :{val.height}</p>
								<img src={val.image} />
								<p onClick={(e) => this.handleDelete(e, val._id)}>
									<i className='fas fa-trash-alt' />
								</p>
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
