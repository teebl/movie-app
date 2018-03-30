import React, { Component } from "react";
import "./App.css";
import { Route, Link, BrowserRouter } from "react-router-dom";
import HireMe from "./HireMe";
import MoviePage from "./MoviePage.js";
import MovieCard from "./MovieCard.js";
import BrowsePage from "./BrowsePage";
import Home from "./Home.js";
import Stream from "./Stream.js";
import Navbar from "./Navbar.js";
import SearchPage from "./SearchPage";
import { CSSTransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: "1a60a9483b15c60fdebc9600bc1e67af",
      defaultApiPaths: {
        newReleasesUri:
          "https://api.themoviedb.org/3/discover/movie?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
        topRatedUri:
          "https://api.themoviedb.org/3/discover/movie?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000",
        comingSoonUri:
          "https://api.themoviedb.org/3/movie/upcoming?api_key=1a60a9483b15c60fdebc9600bc1e67af&language=en-US&page=1"
      },
      movies: []
    };
  }

  performSearch(searchTerm, props) {
    if (searchTerm !== "") {
      console.dir(searchTerm);
      window.history.pushState("", "", "/movie-app/search/" + searchTerm);
      window.location.reload();
    }
  }

  componentDidMount() {
    //AJAX request to go here
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <BrowserRouter>
          <div className="App">
            <header className="header">
              <Navbar onSubmit={this.performSearch} />

              <div className="navbarSpacing" />
            </header>

            <div className="body">
              <Route exact path="/movie-app/" component={Home} />
              <Route exact path="/movie-app/movie" component={MoviePage} />
              <Route path="/movie-app/movie/:id" component={MoviePage} />
              <Route
                path="/movie-app/search/:searchTerm"
                component={SearchPage}
              />
              <Route path="/movie-app/HireMe" component={HireMe} />
              <Route
                path="/movie-app/NewReleases"
                render={routeProps => (
                  <BrowsePage
                    {...routeProps}
                    category={"New Releases"}
                    uri={this.state.defaultApiPaths.newReleasesUri}
                  />
                )}
              />
              <Route
                path="/movie-app/TopRated"
                render={routeProps => (
                  <BrowsePage
                    {...routeProps}
                    category={"Top Rated"}
                    uri={this.state.defaultApiPaths.topRatedUri}
                  />
                )}
              />
              <Route
                path="/movie-app/ComingSoon"
                render={routeProps => (
                  <BrowsePage
                    {...routeProps}
                    category={"Coming Soon"}
                    uri={this.state.defaultApiPaths.comingSoonUri}
                  />
                )}
              />
            </div>
          </div>
        </BrowserRouter>
      </CSSTransitionGroup>
    );
  }
}

export default App;
