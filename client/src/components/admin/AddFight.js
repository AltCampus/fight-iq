import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddFight extends Component {
	// Fetch Players data to show in the fight creation time(name, id is good enough)
	constructor(props){
		super(props);
		this.state = {
			fightDetails: {
				title: "",
				type: "",
				rounds: "",
				player1_id: "",
				player2_id: "",
				playersList: [];
			}
		}
	}

	fetchUsersData = () =>{

	}

	componentDidMount(){
		// Get the players list and add it to the state
		fetchUsersData();
	}


	render() {
		return (
				<div className="AddFight">
					<form>
						<div>Title:</div>
						<input type="text" name="title" onChange={this.updateValue} />
						<div>Type: </div> {/* make this a dropdown */}
						<input type="text" name="type" onChange={this.updateValue}/> 
						<div>Rounds: </div>
						<select name="rounds" id="rounds" onChange={this.updateValue}>
							<option value="3-rounds">3-rounds</option>
							<option value="5-rounds">5-rounds</option>
						</select>
						<h5>Player 1</h5>
							<select name="player1_name" id="player1_name">
								
							</select>

							<div>Name:</div> {/* // Dropdown according to the data fetched */}
							<input type="text" name="player1-name" onChange={this.updateValue}/>
						<h5>Player 2</h5>
							<div>Name:</div> {/* // Dropdown according to the data fetched */}
							<input type="text" name="player2-name" onChange={this.updateValue}/>
							<br/>
						<button>Submit</button>
					</form>
				</div>
			);
		}
	}

	export default connect()(AddFight);