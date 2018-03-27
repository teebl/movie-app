import React, { Component } from "react";
import "./App.css";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HireMe from "./HireMe";
import MoviePage from "./MoviePage.js";
import MovieCard from "./MovieCard.js";
import BrowsePage from "./BrowsePage"
import Home from "./Home.js";
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

    return (
      <BrowserRouter>
      <div className="App">
                


        <header className="header">
          
          <Navbar />

          <div className="navbarSpacing" />
        </header>

        <div className="body">


        <Route exact path="/" component={Home} />
        <Route path="/MoviePage" component={MoviePage} />
        <Route path="/HireMe" component={HireMe} />
        <Route path="/NewReleases" component={BrowsePage} />
        <Route path="/TopRated" component={Home} />
        <Route path="/ComingSoon" component={Home} />


        </div>
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
