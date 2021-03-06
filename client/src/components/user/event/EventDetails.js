import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent, getUser, deletePrediction } from "../../../actions";
import EventDetailsFight from "./EventDetailsFight";

class EventDetails extends Component {

    state = {
        isLoading: true
    }


    componentDidMount() {
        this.props.dispatch(getEvent(this.props.match.params.eventid));
        this.getUserData()
    }

    handleDelete = (e, id) => {
        // let predictionid = this.state.prediction.id;

        this.setState({
            isLoading: true
        }, () => {
            this.props.dispatch(deletePrediction(id, (deleteStatus) => {
                if (deleteStatus) {
                    this.getUserData()
                }
            }));
        })
    };

    getUserData = () => {
        this.props.dispatch(getUser((dataStatus) => {
            this.setState({
                isLoading: false
            })
        }))
    }

    render() {
        let { user } = this.props;
        let { event } = this.props;
        const { fights } = this.props;
        let eventDate = event.date_time && event.date_time.split('T')[0];
        let eventTime = event.date_time && event.date_time.split('T')[1];
        return (
            <div className="EventDetails">
				<div className="event-detail-banner">
					<div className="event-title">{event.title}</div>
					<div className="event-main-event">{event.main_event}</div>
					<div className="event-location">{event.location}</div>
					<div className="event-date_time">{eventTime}, {eventDate} </div>
				</div>
					{
						!this.state.isLoading && fights && fights.map(fight=><EventDetailsFight key={fight._id} fight={fight} event={event} delete={this.handleDelete}/>)
					}
				</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event.event,
        fights: state.event.event.fight,
        isLogged: state.user.isLogged,
        user: state.user.user
    };
};

export default connect(mapStateToProps)(EventDetails);