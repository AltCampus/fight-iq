import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPlayers, deleteEvent } from "../../../actions/player";

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
		console.log(players, "show the list of player in display player");
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
		players: state.players
	};
};

export default connect(mapStateToProps)(DisplayPlayersList);
