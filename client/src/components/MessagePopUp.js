import React, { Component } from "react";
import { connect } from "react-redux";
import { showMessage } from "./../actions";

class MessagePopUp extends Component {
	render() {
		let { message, display } = this.props;
		return display? (
			<div className='MessagePopUp'>
						{message}
			</div>
		): null;
	}
}

const mapStateToProps = state => {
	return {
		message: state.style.message,
		display: state.style.showMessage
	}
}

export default connect(mapStateToProps)(MessagePopUp);