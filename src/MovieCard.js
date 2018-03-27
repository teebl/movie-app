import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {

	render() {
		return (
			
			<li className="movieCard" key={this.props.movie.title}>
			<Link to="/MoviePage">
			<img className="thumbnail" src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} />
			</Link>
			</li>
		)

	}
}