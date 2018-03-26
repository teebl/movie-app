import React, { Component } from "react";
import "./App.css";
import sampleThumbnail from "./sampleThumbnail.jpg";
import stream from "./Stream.js";
import MovieCard from "./MovieCard.js";
import newReleasesRequest from "./requests/newReleasesRequest.js";
import Stream from "./Stream.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          title: "Shawshank",
          thumbnail: sampleThumbnail
        },
        {
          title: "Dark Knight",
          thumbnail: sampleThumbnail
        },
        {
          title: "Back to the Future",
          thumbnail: sampleThumbnail
        }
      ]
    };
  }

  componentDidMount() {
    //AJAX request to go here
    const ajaxData = newReleasesRequest("1a60a9483b15c60fdebc9600bc1e67af");

    this.setState({
      newReleases: ajaxData
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="navbar">
            <div className="title">
              <h1>Notflix</h1>
            </div>

            <div className="navbarLinks">
              <a>New Releases</a>
              <a>Top Rated</a>
              <a>Coming Soon</a>
              <a>Hire Me!</a>
            </div>

            <div className="navbarButtons">
              <a>
                <h1>A</h1>
              </a>
            </div>

            <div className="navbarButtons">
              <a>
                <h1>B</h1>
              </a>
            </div>

            <div className="searchBar">
              <form>
                <input type="text" placeholder="Enter a search term" />
              </form>
            </div>
          </div>
        </header>

        <div className="navbarSpacing" />

        <Stream category="New Releases" 
                api="&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"/>
        <Stream category="Top Rated"
                api="&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000"/>

     
      </div>
    );
  }
}

export default App;
