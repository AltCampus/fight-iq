import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, getEvent } from "../../actions/event";


class PridictionPage extends Component {
		componentDidMount() {
		this.props.dispatch(getEvents());
		this.props.dispatch(getEvent());
	}




	render() {
	const {events} = this.props
	const event =  events.map(event => event.fight)
	console.log(event)
		return (
			<div className='prediction-page'>
				<div className=''>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return{
		events: state.events
	}
}

export default connect(mapStateToProps)(PridictionPage);
