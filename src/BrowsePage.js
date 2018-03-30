import React, { Component } from 'react';
import MovieCard from "./MovieCard.js";


export default class BrowsePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apiKey: "1a60a9483b15c60fdebc9600bc1e67af",
			category: "",
			movies: [],
    };

}

componentDidMount() {
  fetch(this.props.uri)
    .then(data => data.json())
    .then(data => {
      // splice is just to get rid of two elements that throw off the page's spacing
      // More sophisticated solutions are available (modulo operator, dummy spaces) but for my purposes this is fine
        data.results.splice(-2,2);
        this.setState({ movies: [...data.results]})
      });
}

render() {
      const newReleaseApi =
      "https://api.themoviedb.org/3/discover/movie?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

	return (
        
        <div className="BrowsePage">
          <div className="category">
            <h2>{this.props.category}</h2>
          </div>
                    <div className="movieList">
            <ul>
              {this.state.movies.map(item => {
                return <MovieCard movie={item} />;
              })}
            </ul>
          </div>
          </div>
		)
}
}