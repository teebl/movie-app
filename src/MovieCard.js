import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"movie":{},
		}
	}


	render() {
		return (
			
			<div className="movieCard" key={this.props.movie.title}>
			<Link to={"/movie-app/movie/" + this.props.movie.id}>
			<div className="movieCardGradient"></div>
			<p className="movieCardTitle"> {this.props.movie.title}</p>
			<img className="thumbnail" src={"https://image.tmdb.org/t/p/w300/" + this.props.movie.backdrop_path} />
			</Link>
			</div>
		)

	}
}