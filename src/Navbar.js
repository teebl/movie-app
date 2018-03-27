import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	constructor(props) {
		super(props)

	}


render() {
	return (
		<div className="navbar">
            <div className="title">
              <NavLink  to="/" className="navLink" ><h1>Notflix</h1></NavLink>
            </div>

            <div className="navbarLinks">
              <a>New Releases</a>
              <a>Top Rated</a>
              <a>Coming Soon</a>
              <NavLink to="/NewReleases" className="navLink">New Releases</NavLink>
              <NavLink to="/TopRated" className="navLink">Top Rated</NavLink>
              <NavLink to="/ComingSoon" className="navLink">Coming Soon</NavLink>
              <NavLink to="/HireMe" className="navLink">Hire Me!</NavLink>
          </div>

            <div className="navbarButtons">
              <a>
                <h1>A</h1>
              </a>
            </div>

            <div className="navbarButtons">
              <a>
                <h1>B</h1>
              </a>
            </div>

            <div className="searchBar">
              <form>
                <input type="text" placeholder="Enter a search term" />
              </form>
            </div>
          </div>

		)

}



}

