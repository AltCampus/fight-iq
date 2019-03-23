import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";

class Fight extends Component {
	redirectUser = (success, errorMsg = "") => {
		if (success) {
			this.props.history.push("/event/" + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			});
		}
	};

	render() {
		let { eventid, fight } = this.props;

		return (
			<div className='Fight'>
				<img src={fight.player1.image} />
				<img src={fight.player2.image} />
				<div className='title'>{fight.title}</div>
				<div className='type'>Type: {fight.type}</div>
				<div className='rounds'>Rounds: {fight.rounds}</div>
				<div className='bottom-section'>
					{!fight.isPredicted ? (
						<div>
							<Link
								to={{
									pathname:
										"/events/" + eventid + "/fights/" + fight._id + "/predict",
									state: fight
								}}>
								<i className='far fa-plus-square' /> Predict
							</Link>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(Fight));
