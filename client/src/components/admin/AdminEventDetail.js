import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import Fight from './Fight';
import { getEvent } from "./../../actions";

class AdminEventDetail extends Component {
	// Onload do a fetch request to get the event detail
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));
	}

	render() {
		// filter specific event from the events array
		let { event } = this.props;
		const { fights } = this.props;

		return (
			<div className='AdminEventDetail'>
				<div>{event.title}</div>
				<div>{event.mainEvent}</div>
				<div>{event.location}</div>
				<div>{event.date_time}</div>
				<div className='fight-detail'>
					{fights &&
						fights.map((val, index) => (
							<div className='add-fight' key={index}>
								<div>
									<p>{val.title}</p>
									<p>{val.type}</p>
									<p>{val.rounds}</p>
									<p>{val.player1name}</p>
									<p>{val.player2name}</p>
								</div>
								<p>
									<i className='fas fa-edit' />
								</p>
								<p>
									<i className='fas fa-trash-alt' />
								</p>
							</div>
						))}
				</div>
				<Link to={"/admin/" + event._id + "/fights"}>
					<button>Add a fight</button>
				</Link>
			</div>
		);
	}
}

// fetch all events data from the store
const mapStateToProps = (state) => {
	return {
		event: state.event,
		fights: state.event.fight
	};
};

export default connect(mapStateToProps)(AdminEventDetail);
