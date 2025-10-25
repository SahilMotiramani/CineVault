import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import styles from './Info.module.css'

function Info() {
    const { id, type } = useParams();
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isInWatchLater, setIsInWatchLater] = useState(false);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQ1ZTM2ZGFlZjc3Nzk3MDRhZWUwYzkwOWI0NTUwYiIsIm5iZiI6MTcxOTgwNjg5NS4wMjQzOTMsInN1YiI6IjY2ODIyYTYyNWM2MjUxNGRmNjNhZDFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xwAMUAClBUQn5275d_i8CeoUN8ZBL2gqeE2dP2FNLM0'
      }
    };
      
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(data =>{
            setInfo(data);
            setIsLoading(false);
            // Check if already in watch later
            const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
            setIsInWatchLater(watchLater.some(item => item.id === parseInt(id)));
        })
    }, [type, id]);

    const toggleWatchLater = () => {
        const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
        if (isInWatchLater) {
            const newList = watchLater.filter(item => item.id !== info.id);
            localStorage.setItem('watchLater', JSON.stringify(newList));
            setIsInWatchLater(false);
        } else {
            const itemToAdd = {
                id: info.id,
                title: info.title || info.name,
                poster_path: info.poster_path,
                type: type,
                media_type: type // ensure we store the media type for correct routing
            };
            localStorage.setItem('watchLater', JSON.stringify([...watchLater, itemToAdd]));
            setIsInWatchLater(true);
        }
    };

    return (
        <div>
            <Header></Header>
            {isLoading ? (<p>Loading...</p> ) : (
            <div className={styles.outerdiv}>
                <img className={styles.backimage} src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt={info.title || info.name} />
                <div className={styles.overlay}></div>
                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title || info.name}/>
                <div className={styles.infodiv}>
                    <h1>{info.title || info.name}</h1>
                    <div className={styles.typeandrate}>
                        <p>Rating: {info.vote_average}</p>
                        <p>Runtime: {info.runtime || info.episode_run_time} min</p>
                        <p>{type}</p>
                        <button 
                            onClick={toggleWatchLater}
                            className={`${styles.watchLaterBtn} ${isInWatchLater ? styles.inWatchLater : ''}`}
                        >
                            {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
                        </button>
                    </div>
                    <h4>Overview:</h4>
                    <p> {info.overview}</p>
                    <p>Release date: {info.release_date || info.first_air_date}</p>
                    <p>Genres:</p>
                    <div className={styles.genres}>
                        {info.genres.map((genre) => (
                            <span key={genre.id}>{genre.name}</span>
                    ))}
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default Info;