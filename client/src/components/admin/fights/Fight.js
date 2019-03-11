import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFight,getEvent } from './../../../actions';


class Fight extends Component {

	handleDelete = () =>{
		let {eventid, fight} = this.props;
		this.props.dispatch(deleteFight(eventid, fight._id, this.redirectUser))
	}

	redirectUser = (success, errorMsg = "") => {
		if (success){
			this.props.dispatch(getEvent(this.props.eventid));
			this.props.history.push('/admin/event/' + this.props.eventid);
		} else {
			this.setState({
				error: errorMsg
			})
		}
	}

	render() {
		let {eventid, fight} = this.props;
		return (
			<div className="Fight">
					<p>{fight.title}</p>
					<p>{fight.type}</p>
					<p>{fight.rounds}</p>
					<p>{fight.player1name}</p>
					<p>{fight.player2name}</p>
					<Link to={'/admin/' + eventid + '/fights/' + fight._id + '/edit'}>
						<i className='fas fa-edit' />
					</Link>
					<Link to={'/admin/event/' + eventid} onClick={this.handleDelete}>
						<i className="fas fa-trash-alt"></i>	
					</Link>
			</div>
			);
		}
	}

	export default withRouter(connect()(Fight));