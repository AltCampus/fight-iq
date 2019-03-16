import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addPlayer, getPlayer, editPlayer } from "./../../../actions/player";

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
			},
			isEdit: false
		};
	}

	// fetchUsersData = () => {};

	componentDidMount() {
		if (/edit/.test(location.href)) {
			const { id } = this.props.match.params;

			this.props.dispatch(
				getPlayer(id, ({ name, image, weight, height, rank }) => {
					this.setState({
						...this.state,
						playerDetails: {
							name,
							image,
							weight,
							height,
							rank
						},
						isEdit: true
					});
				})
			);
		}

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
		if (this.state.isEdit) {
			const { id } = this.props.match.params;

			this.props.dispatch(editPlayer(this.state.playerDetails, id));
		} else {
			this.props.dispatch(
				addPlayer(this.state.playerDetails, this.redirectUser)
			);
		}
	};

	redirectUser = (success) => {
		if (success) {
			this.props.history.push(`/admin/players`);
		}
	};

	render() {
		const { name, image, height, weight, rank } = this.state.playerDetails;

		return (
			<div className='AddPlayer'>
				<form>
					<div>Name:</div>
					<input
						type='text'
						name='name'
						value={name}
						onChange={this.updateValue}
						required
					/>
					<div>Image Link: </div>
					<input
						type='text'
						name='image'
						value={image}
						onChange={this.updateValue}
						required
					/>
					<div>Weight: </div>
					<input
						type='text'
						name='weight'
						value={weight}
						onChange={this.updateValue}
						required
					/>
					<div>Height:</div>
					<input
						type='text'
						name='height'
						value={height}
						onChange={this.updateValue}
						required
					/>
					<div>Rank:</div>
					<input
						type='text'
						name='rank'
						value={rank}
						onChange={this.updateValue}
						required
					/>
					<br />
					<button onClick={this.handlePlayerSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddPlayer);
