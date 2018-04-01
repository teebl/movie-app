import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import MovieCard from "./MovieCard.js";
import { CSSTransitionGroup } from 'react-transition-group';



export default class Stream extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apiKey: "1a60a9483b15c60fdebc9600bc1e67af",
			category: "",
			movies: [],
    };

}

componentDidMount() {
	fetch(this.props.apiUrl).then(data => data.json()).then(data => this.setState({ movies: [...data.results]}));

}

render() {
	return (
        
        <div className="stream">
          <div className="streamCategory">
            <h2>{this.props.category}</h2>
          </div>
          <div className="movieCarousel">
            <ul>
              {this.state.movies.map(item => {
                return (
                  <MovieCard movie={item} />
                  );

              })}
            </ul>
          </div>
          </div>
		)
}
}