import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './HomeStyles.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ1ZTM2ZGFlZjc3Nzk3MDRhZWUwYzkwOWI0NTUwYiIsIm5iZiI6MTcxOTgwNjg5NS4wMjQzOTMsInN1YiI6IjY2ODIyYTYyNWM2MjUxNGRmNjNhZDFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xwAMUAClBUQn5275d_i8CeoUN8ZBL2gqeE2dP2FNLM0'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
      .then(response => response.json())
      .then(data =>{ 
        setTrendingMovies(data.results);
        setIsLoading(false);
      })
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <div className={styles.tremov}>
      <h2>Trending Movies</h2>
      {isLoading ? (<p>Loading movies...</p> ) :
      (
      <Slider {...settings}>
        {trendingMovies.map(movie => (
          <Link className={styles.link} to={`/${movie.media_type}/${movie.id}`} key={movie.id}>
            <div className={styles.card}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          </Link>
        ))}
      </Slider>)}
    </div>
  );
};

export default TrendingMovies;
