import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';
import UserStats from './UserStats';
import UserPredictions from './UserPredictions';
import { getUser } from './../../../actions';


class Profile extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {

        this.props.dispatch(getUser((dataStatus) => {
            this.setState({
                isLoading: false
            })
        }))

        // TODO: Handle user data not found redirect
    }

    render() {
        let { user } = this.props;
        return (
            <div className="Profile">

				{
					!this.state.isLoading ?
				<>
				<UserDetails user={user}/>
				<UserStats user={user}/>
				<UserPredictions user={user}/>
				</> 
				: null
				}
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Profile);