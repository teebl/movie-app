import React, { Component } from 'react';

export default class MovieCard extends Component {

	render() {
		return (
			<li className="movieCard" key={this.props.movie.title}>
			<a>
			<img className="thumbnail" src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.poster_path} />
			</a>
			</li>
		)

	}
}