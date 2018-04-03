import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.searchTerm, this.props);
		this.setState({ searchTerm: "" });
	}

	render() {
		return (
			<div className="navbar">
				<div className="title">
					<NavLink to="/movie-app/" className="titleLink">
						<h1>Notflix</h1>
					</NavLink>
				</div>

				<div className="navbarLinks">
					<NavLink to="/movie-app/NewReleases" className="navLink">
						New Releases
					</NavLink>
					<NavLink to="/movie-app/TopRated" className="navLink">
						Top Rated
					</NavLink>
					<NavLink to="/movie-app/ComingSoon" className="navLink">
						Coming Soon
					</NavLink>
					<NavLink to="/movie-app/HireMe" className="navLink">
						Hire Me!
					</NavLink>
				</div>
				<div className="searchBar">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							placeholder="Search"
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
					</form>
				</div>
			</div>
		);
	}
}
