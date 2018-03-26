export default function newReleasesRequest(apiKey) {
	fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=" +
			apiKey +
			"&language=en-US" +
			"&sort_by=popularity.desc" +
			"&include_adult=false" +
			"&include_video=false&page=1"
	).then(data => data.json()).then(data => console.log(data.results))
}