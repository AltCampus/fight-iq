import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers, deleteEvent, editPlayer } from "../../../actions/player";

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
				<div className='show-players-list'>
					{players &&
						players.map((val, index) => (
							<div key={index}>
								<img src={val.image} />
								<p>Name :{val.name}</p>
								<p> Weight:{val.weight}</p>
								<p> Height :{val.height}</p>
								<div>
									<p onClick={(e) => this.handleDelete(e, val._id)}>
										<i className='fas fa-trash-alt' />
									</p>
									<p onClick={(e) => this.handleEdit(e, val._id)}>
										<i className='fas fa-edit' />
									</p>
								</div>
							</div>
						))}
				</div>
				<div>
					<Link to='/admin/players/add'>
						<button className='add-player'>Add a player</button>
					</Link>
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
