import React, { Component } from "react";
import Stream from "./Stream.js";

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const newReleaseApi =
			"https://api.themoviedb.org/3/discover/movie?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
		const topRatedApi =
			"https://api.themoviedb.org/3/discover/movie?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000";
		const comingSoonApi =
			"https://api.themoviedb.org/3/movie/upcoming?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&page=1"

		return (
			<div>
				<Stream category="New Releases" apiUrl={newReleaseApi} />
				<Stream category="Top Rated" apiUrl={topRatedApi} />
				<Stream category="Coming Soon" apiUrl={comingSoonApi} />
			</div>
		);
	}
}
