import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";
import LoadingTile from "./LoadingTile";
import { animated, useTrail } from "react-spring";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const carouselSettings = {
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }
  ],
  lazyLoad: "ondemand",
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 6,
  adaptiveHeight: true,
  className: "slickSlider"
};

const SimpleSlider = props => {
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    fetch(props.apiUrl)
      .then(data => data.json())
      .then(data => setMovies([...data.results]));
  }, []);

  const imageLoadedHandler = () => {
    setImagesLoaded(imagesLoaded + 1);
  };

  const renderMovieCarousel = () => (
    <div className="sliderBox">
      <h2> {props.category}</h2>
      <Slider {...carouselSettings}>
        {movies.map((movie, i) => {
          return (
            <animated.div className="sliderCard">
              <MovieCard
                key={i}
                index={i}
                movie={movie}
                onImageLoaded={imageLoadedHandler}
                allLoaded={6 <= imagesLoaded}
              />
            </animated.div>
          );
        })}
      </Slider>
    </div>
  );

  return renderMovieCarousel();
};

export default SimpleSlider;
