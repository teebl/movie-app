import React, { Component } from "react";

export default class MoviePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {
				adult: false,
				backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
				belongs_to_collection: null,
				budget: 175000000,
				genres: [
					{
						id: 12,
						name: "Adventure"
					},
					{
						id: 35,
						name: "Comedy"
					},
					{
						id: 10751,
						name: "Family"
					},
					{
						id: 16,
						name: "Animation"
					}
				],
				homepage: null,
				id: 354912,
				imdb_id: "tt2380307",
				original_language: "en",
				original_title: "Coco",
				overview:
					"Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
				popularity: 241.479232,
				poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
				production_companies: [
					{
						id: 3,
						logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
						name: "Pixar",
						origin_country: "US"
					}
				],
				production_countries: [
					{
						iso_3166_1: "US",
						name: "United States of America"
					}
				],
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
				tagline: "The celebration of a lifetime",
				title: "Coco",
				video: false,
				vote_average: 7.8,
				vote_count: 3402
			}
		};
	}

	render() {
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
					<h3>"{this.state.movie.tagline}"</h3>
					<h4>Release Date: {this.state.movie.release_date}</h4>
					<p className="moviePageOverview">
						{this.state.movie.overview}
					</p>

					<h2>Genres</h2>
						{this.state.movie.genres.map(item => {
							return <span className="genreTag">{item.name}</span>
						})}
					<p> Check out on <a href={ "http://www.imdb.com/title/" + this.state.movie.imdb_id}>imdb</a></p>
				</div>
			</div>
		);
	}
}
