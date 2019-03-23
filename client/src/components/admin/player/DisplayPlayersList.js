import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers, deleteEvent, editPlayer } from "../../../actions/player";
import "./style.scss";

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

	handleEdit(e, id) {
		this.props.dispatch(editPlayer(id));
	}

	render() {
		const { players } = this.props;
		return (
			<div className='display-list-of-players'>
				<div className='add-player-main'>
					<Link to='/admin/players/add'>
						<button className='add-player'>Add a player</button>
					</Link>
				</div>
				<div className='show-players-list'>
					{players &&
						players.map((val, index) => (
							<div key={index} className='Player'>
								<img src={val.image} />
								<div className='player-details'>
									<div className='player-name'> {val.name}</div>
									<div className='player-weight'> Weight: {val.weight}</div>
									<div className='player-height'> Height: {val.height}</div>
								</div>
								<div className='player-controls'>
									<Link
										to={`/admin/players/${val._id}/edit`}
										onClick={(e) => this.handleEdit(e, val._id)}>
										<i className='fas fa-edit' />
									</Link>
									<p onClick={(e) => this.handleDelete(e, val._id)}>
										<i className='fas fa-trash-alt' />
									</p>
								</div>
							</div>
						))}
				</div>
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
