import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../../actions/event";

class Fight extends Component {
	constructor() {
		super();
		this.state = {
			currentIndex: 0
		};
	}

	handleNextFight = () => {
		const maxIndex = this.props.data.length - 1;
		console.log(this.state.currentIndex);

		this.setState((state) => {
			const nextIndex =
				state.currentIndex >= maxIndex ? 0 : state.currentIndex + 1;
			return {
				currentIndex: nextIndex
			};
		});
	};

	handlePrevFight = () => {
		const maxIndex = this.props.data.length - 1;
		this.setState((state) => {
			return {
				currentIndex:
					state.currentIndex <= 0 ? maxIndex : state.currentIndex - 1
			};
		});
	};

	render() {
		const fight = this.props.data;
		const event = this.props.event;
		console.log("Fight:", fight);
		return (
			<div className='fight-card'>
				<div className='player-images'>
					{/* <div className='image-section'>
						<img
							className='player-1'
							src={fight[this.state.currentIndex].player1.image}
						/>
						<img
							className='player-2'
							src={fight[this.state.currentIndex].player2.image}
						/>
					</div> */}
					<div className='palyers-name'>
						{fight[this.state.currentIndex].title}
					</div>
				</div>
				<div>
					{fight.length > 1 ? (
						<div className='buttons'>
							<button className='nextfight-btn' onClick={this.handleNextFight}>
								Next
							</button>
							<button className='prevfight-btn' onClick={this.handlePrevFight}>
								Prev
							</button>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default connect()(Fight);
