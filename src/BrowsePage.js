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
        this.setState({ movies: [...data.results]})
      });
}

render() {

	return (
        
        <div className="BrowsePage">
          <div className="category">
            <h2>{this.props.category}</h2>
          </div>
                    <div className="movieList">
            <ul>
              {this.state.movies.map(item => {
                return <div className="browsePageCard"><MovieCard movie={item} /></div>;
              })}
            </ul>
          </div>
          </div>
		)
}
}