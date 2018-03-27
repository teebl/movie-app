import React, { Component } from 'react';
import profile from './profile.jpg';

export default class HireMe extends Component {
	render() {
		return (
			<div className="hireMe">
				<img src={profile} />
				<div className="about">
				<h1>Trevor Seibel</h1>
				<p>Hard working. Resourceful. Self-Educated.</p>
				</div>
			</div>
			)
	}
}