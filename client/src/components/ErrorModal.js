import React, { Component } from "react";

class ErrorModal extends Component {
	render() {
		let { message, display } = this.props;
		return display? (
			<div className='ErrorModal'>
						{message}
			</div>
		): null;
	}
}

export default ErrorModal;
