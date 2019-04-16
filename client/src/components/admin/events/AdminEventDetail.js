import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent, deleteEvent } from "./../../../actions";
import Fight from "./../fights/Fight";


class AdminEventDetail extends Component {
    componentDidMount() {
        this.props.dispatch(getEvent(this.props.match.params.eventid));
    }

    handleDelete(id) {
        this.props.dispatch(deleteEvent(id, this.redirectUser))
    }

    redirectUser = (success, errorMsg = "") => {
        if (success) {
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
				<div className="event-title">{event.title}</div>
				<div className="event-location">{event.location}</div>
				<div className="event-date_time">{event.date_time}</div>
				<div className="event-bottom-section">
					<Link to={'/admin/' + event._id + '/edit'}>
						<i className="fas fa-edit"></i> Edit event
					</Link>
					<Link to={'/admin'} onClick={()=>{this.handleDelete(event._id)}}>
						<i className="fas fa-trash-alt"></i> Delete event
					</Link>
					<Link to={"/admin/" + event._id + "/fights"}>
						<i className="far fa-plus-square"></i> Add Fight
					</Link>
				</div>
				<h5 className="fights">Fights: </h5>
				{
					fights && fights.map(fight=><Fight key={fight._id} fight={fight} eventid={event._id}/>)
				}

			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.event,
        fights: state.event.event.fight
    };
};

export default connect(mapStateToProps)(AdminEventDetail);