import React from "react";
import "./styles/App.css";
import { Route, BrowserRouter } from "react-router-dom";
import HireMe from "./containers/HireMe";
import MoviePage from "./containers/MoviePage.js";
import BrowsePage from "./containers/BrowsePage.js";
import Home from "./containers/Home.js";
import Navbar from "./components/Navbar.js";
import SearchPage from "./containers/SearchPage";
import API_KEY from "./config.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: API_KEY,
      defaultApiPaths: {
        newReleasesUri:
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
        topRatedUri:
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=4000",
        comingSoonUri:
          "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
          API_KEY +
          "&language=en-US&page=1"
      },
      movies: []
    };
  }

  performSearch(searchTerm, props) {
    if (searchTerm !== "") {
      window.history.pushState("", "", "/movie-app/search/" + searchTerm);
      window.location.reload();
    }
  }

  componentDidMount() {
    //AJAX request to go here
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <Navbar onSubmit={this.performSearch} />

            <div className="navbarSpacing" />
          </header>

          <div className="body">
            <Route
              exact
              path="/movie-app/"
              render={routeProps => (
                <Home
                  {...routeProps}
                  defaultApiPaths={this.state.defaultApiPaths}
                />
              )}
            />
            <Route exact path="/movie-app/movie" component={MoviePage} />
            <Route path="/movie-app/movie/:id" component={MoviePage} />
            <Route
              path="/movie-app/search/:searchTerm"
              render={routeProps => (
                <SearchPage {...routeProps} apiKey={this.state.apiKey} />
              )}
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
    );
  }
}

export default App;
