import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import styles from './SearchStyles.module.css';

const SearchPage = () => {
  const { query } = useParams();
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ1ZTM2ZGFlZjc3Nzk3MDRhZWUwYzkwOWI0NTUwYiIsIm5iZiI6MTcxOTgwNjg5NS4wMjQzOTMsInN1YiI6IjY2ODIyYTYyNWM2MjUxNGRmNjNhZDFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xwAMUAClBUQn5275d_i8CeoUN8ZBL2gqeE2dP2FNLM0'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
        setTopMovies(data.results);
        setIsLoading(false);
      })
  }, [query, options]);

  return (
    <div>
      <Header />
      <h2 className={styles.resultsfor}>Search results for: {query}</h2>
      <div className={styles.tremov}>
        {isLoading ? (<p>Searching...</p>) : (
          topMovies.map(media => (
            <Link className={styles.link} to={`/${media.media_type}/${media.id}`} key={media.id}>
              <div className={styles.card} key={media.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
                  alt={media.title || media.name}
                />
                <p>{media.title || media.name}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
