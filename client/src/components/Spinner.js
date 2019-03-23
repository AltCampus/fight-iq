import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Spinner extends Component {
	render() {
		return (
			<div className='loader'>
				<Loader type='ThreeDots' color='#9e0929' height='100' width='100' />
				<p>There are no fights right now.</p>
			</div>
		);
	}
}
