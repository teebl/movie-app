import React, { Component } from "react";

export default class Navbar extends Component {
	constructor(props) {
		super(props)

	}


render() {
	return (
		<div className="navbar">
            <div className="title">
              <h1>Notflix</h1>
            </div>

            <div className="navbarLinks">
              <a>New Releases</a>
              <a>Top Rated</a>
              <a>Coming Soon</a>
              <a>Hire Me!</a>
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

