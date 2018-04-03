import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Slider from 'react-slick'
import MovieCard from '../components/MovieCard'
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adaptiveHeight: false,
      category: "",
      movies: [],
    };

}

componentWillMount() {

  fetch(this.props.apiUrl).then(data => data.json()).then(data => this.setState({ movies: [...data.results]}));
}

ComponentDidMount() {
  setTimeout(() => {
    this.setState({
      adaptiveHeight: true
    })
  }, 400)

}

  render() {
    const heightBool = this.state.adaptiveHeight;

    const settings = {
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }}],
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: {heightBool},
      className:'slickSlider',
    };
    return (
      <div className="sliderBox">
        <h2> {this.props.category}</h2>
        <Slider {...settings}>
              {this.state.movies.map(item => {
                return (
                  <div className="sliderCard"><MovieCard movie={item}  /></div>
                  );

              })}
        </Slider>
      </div>
    );
  }
}