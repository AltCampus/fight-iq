import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent, deleteEvent } from "./../../../actions";

class AdminEventDetail extends Component {
	componentDidMount() {
		this.props.dispatch(getEvent(this.props.match.params.eventid));		
	}

	handleDelete(id){
		this.props.dispatch(deleteEvent(id, this.redirectUser))
	}

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.history.push('/admin');
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
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
				<Link to={'/admin/' + event._id + '/edit'}>
					<i className="fas fa-edit"></i>
				</Link>
				<Link to={'/admin'} onClick={()=>{this.handleDelete(event._id)}}>
					<i className="fas fa-trash-alt"></i>	
				</Link>
				<Link to={"/admin/" + event._id + "/fights"}>
					<button>Add a fight</button>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		event: state.event,
		fights: state.event.fight
	};
};

export default connect(mapStateToProps)(AdminEventDetail);
