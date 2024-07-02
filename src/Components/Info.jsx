import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { useState,useEffect } from 'react';
import styles from './Info.module.css'

function Info() {

    const { id, type } = useParams();

    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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
        })
    }, [type, id]);

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