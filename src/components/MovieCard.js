import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoadingTile from "./LoadingTile";

const MovieCardWrapper = styled.div`
  margin: 5%;
`;
const StyledMovieCard = styled.div`
  height: 90px;
  width: 160px;
  margin: 0px 20px;
  transition: all 0.2s ease-in-out;
  position: relative;
  :hover {
    transform: scale(1.1);
    z-index: 999;
    overflow: visible;
  }
`;

const MovieCardGradient = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
`;

const MovieCardTitle = styled.div`
  font-style: bold;
  position: absolute;
  bottom: 0.25em;
  left: 0.25em;
  color: lightgrey;
`;

const StyledImg = styled.img`
  visibility: ${({ showImage }) => (showImage ? "" : "hidden")};
  height: 100%;
  min-height: 50px;
`;

const MovieCard = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const renderLoadingTile = () =>
    props.allLoaded || (!props.imageLoadedHandler && imageLoaded) ? null : (
      <LoadingTile index={props.index} />
    );

  const imageLoadedHandler = () => {
    setTimeout(() => {
      setImageLoaded(true);
      props.onImageLoaded && props.onImageLoaded();
    }, 1000 + 100 * props.index);
  };

  const renderMoveCardTitle = () => {
    return props.allLoaded || (!props.imageLoadedHandler && imageLoaded) ? (
      <MovieCardTitle className="movieCardTitle">
        {props.movie.title}
      </MovieCardTitle>
    ) : null;
  };

  return (
    <MovieCardWrapper>
      <StyledMovieCard key={props.movie.title}>
        <Link to={"/movie-app/movie/" + props.movie.id}>
          {renderLoadingTile()}
          <MovieCardGradient />
          {renderMoveCardTitle()}
          <StyledImg
            showImage={
              props.allLoaded || (!props.imageLoadedHandler && imageLoaded)
            }
            onLoad={imageLoadedHandler}
            src={"https://image.tmdb.org/t/p/w300/" + props.movie.backdrop_path}
          />
        </Link>
      </StyledMovieCard>
    </MovieCardWrapper>
  );
};

export default MovieCard;
