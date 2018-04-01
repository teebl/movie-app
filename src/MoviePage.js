import React, { Component } from "react";
import imdb from "./icons/fa-imdb.svg";

export default class MoviePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {
				adult: false,
				backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
				belongs_to_collection: null,
				budget: null,
				genres: [],
				homepage: null,
				id: "" ,
				imdb_id: "tt2380307",
				original_language: "en",
				original_title: "Movie",
				overview: "Overview",
				popularity: 0,
				poster_path: "",
				production_companies: [],
				production_countries: [],
				release_date: "2017-10-27",
				revenue: 700920729,
				runtime: 105,
				spoken_languages: [
					{
						iso_639_1: "en",
						name: "English"
					},
					{
						iso_639_1: "es",
						name: "Español"
					}
				],
				status: "Released",
				tagline: "Tagline",
				title: "Title",
				video: false,
				vote_average: 0.0,
				vote_count: 0.0
			}
		};
	}

	componentDidMount() {
		
		// const movieUri = "https://api.themoviedb.org/3/movie/337167?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US";
		const movieUri = "https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US"
		
		console.log(movieUri);
		console.dir(this.props.match.params.id);

		fetch(movieUri).then(data => data.json()).then(data => {this.setState({ movie: data}); console.dir(data)});


	}

	render() {
		let movieTagline = "";
		
		if (this.state.movie.tagline !== "") {
			movieTagline = '"' + this.state.movie.tagline + '"';
		}

		return (
			<div className="moviePage">
				<div className="movieThumbnail">
					<img
						src={
							"https://image.tmdb.org/t/p/w500/" +
							this.state.movie.poster_path
						}
					/>
				</div>

				<div className="moviePageContent">
					<h1>{this.state.movie.title}</h1>
					<h3>{movieTagline}</h3>
					<h4>Release Date: {this.state.movie.release_date}</h4>
					<p className="moviePageOverview">
						{this.state.movie.overview}
					</p>

					<h2>Genres</h2>
						{this.state.movie.genres.map(item => {
							return <span className="genreTag">{item.name}</span>
						})}
					<a href={ "http://www.imdb.com/title/" + this.state.movie.imdb_id} class="moviePageIconLink"><img src={imdb} class="moviePageIcon" /></a>
				</div>
			</div>
		);
	}
}
