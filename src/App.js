import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import MoviePage from "./MoviePage.js";
import MovieCard from "./MovieCard.js";
import Stream from "./Stream.js";
import Navbar from "./Navbar.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: "1a60a9483b15c60fdebc9600bc1e67af",
      movies: []
    };
  }

  componentDidMount() {
    //AJAX request to go here
  }

  render() {
    const newReleaseApi = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    const TopRatedApi = "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000";


    return (
      <div className="App">
        <header className="header">
          <Navbar />

          <div className="navbarSpacing" />
        </header>
        <HashRouter>
        <div className="body">
        <div className="home">
        <Stream
          category="New Releases"
          api= {newReleaseApi}
        />
        <Stream
          category="Top Rated"
          api= {TopRatedApi}
        />
        </div>
        
        <MoviePage />

        <div className="profilePage">
        This Web Application was made by Trevor Seibel
        </div>


        <div className="hireMePage">
        check out my portfolio <a href="https://teebl.github.io">here</a>
        </div>

        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
