import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addPlayer } from "./../../actions/player";

class AddPlayer extends Component {
	// Fetch Players data to show in the fight creation time(name, id is good enough)
	constructor(props) {
		super(props);
		this.state = {
			playerDetails: {
				name: "",
				image: "",
				weight: "",
				height: "",
				rank: ""
			}
		}
	}

	// fetchUsersData = () => {};

	componentDidMount() {
		// Get the players list and add it to the state
		// this.fetchUsersData();
		
	}

	updateValue = (e) => {
		this.setState({
			playerDetails: {
				...this.state.playerDetails,
				[e.target.name]: e.target.value	
			}
		});
	};

	handlePlayerSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(addPlayer(this.state.playerDetails, this.redirectUser));
	}

	redirectUser = (success) =>{
		if (success){
			this.props.history.push(`/admin`);
		}
	}

	render() {
		return (
			<div className='AddPlayer'>
				<form>
					<div>Name:</div>
					<input type='text' name='name' onChange={this.updateValue} />
					<div>Image Link: </div>
					<input type='text' name='image' onChange={this.updateValue} />
					<div>Weight: </div>
					<input type='text' name='weight' onChange={this.updateValue} />
					<div>Height:</div>
					<input type='text' name='height' onChange={this.updateValue} />
					<div>Rank:</div>
					<input type='text' name='rank' onChange={this.updateValue} />
						<br />
					<button onClick={this.handlePlayerSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddPlayer);
