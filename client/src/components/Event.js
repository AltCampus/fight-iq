import React, { Component } from "react";
import { connect } from "react-redux";

class Events extends Component {
	handleClick(title) {}

	render() {
		let { event } = this.props;

		return (
			<div>
				<div className='Event'>
					<div className='eventTitle'>{event.title}</div>
					<button onClick={this.handleClick(event.title)}>Predict</button>
				</div>
			</div>
		);
	}
}

export default connect()(Events);
