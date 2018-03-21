import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    //AJAX request to go here
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="navbar">
            <div className="title">
              <h1>Notflix</h1>
            </div>
            <div className="navbarButtons" />
            <div className="searchBar">
              <form>
                <input type="text" placeholder="Enter a search term"/>
              </form>
            </div>
            <div className="navbarLinks">
              <a>New Releases</a>
              <a>Top Rated</a>
              <a>Coming Soon</a>
              <a>Hire Me!</a>
            </div>
            
            
            </div>

          
        </header>
        <div className="navbarSpacing" />
        <h2 className="App-intro">
          <div className="category">Current New Releases</div>
          <div className="movieCarousel">movies movies movies</div>
        </h2>
      </div>
    );
  }
}

export default App;
