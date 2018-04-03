import React, { Component } from "react";
import MovieCard from '../components/MovieCard'; 

export default class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: "",
			movies: []
		};
	}

	componentDidMount() {
		fetch('https://api.themoviedb.org/3/search/movie?api_key=' + this.props.apiKey + '&language=en-US&query=' + this.props.match.params.searchTerm + '&page=1&include_adult=false')
			.then(data => data.json())
			.then(data => this.setState({ movies: [...data.results] }));
	}

	render() {
		return (
			<div className="BrowsePage">
				<div className="category">
					<h2>Results for {this.props.match.params.searchTerm}</h2>
				</div>
				<div className="movieList">
					<ul>
						{this.state.movies.map(item => {
							return <div className="browsePageCard"><MovieCard movie={item} /></div>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}
