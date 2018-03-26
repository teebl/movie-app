import React, { Component } from 'react';
import sampleThumbnail from "./sampleThumbnail.jpg";
import MovieCard from "./MovieCard.js";


export default class Stream extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apiKey: "1a60a9483b15c60fdebc9600bc1e67af",
			category: "",
			movies: [
        {
          title: "Shawshank",
          thumbnail: sampleThumbnail,
        },
        {
          title: "Dark Knight",
          thumbnail: sampleThumbnail,

        },
        {
          title: "Back to the Future",
          thumbnail: sampleThumbnail,

        }
      ]
    };

}

componentDidMount() {
	fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			this.state.apiKey +
			this.props.api
	).then(data => data.json()).then(data => this.setState({ movies: [...data.results]}));
	console.dir(this.state.movies);
}

render() {
	return (
        
        <div className="stream">
          <div className="category">
            <h2>{this.props.category}</h2>
          </div>
          <div className="movieCarousel">
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