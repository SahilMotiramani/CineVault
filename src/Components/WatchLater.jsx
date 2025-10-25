import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './WatchLater.module.css';

function WatchLater() {
    const [watchList, setWatchList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load watch later list from localStorage
        const savedList = JSON.parse(localStorage.getItem('watchLater') || '[]');
        setWatchList(savedList);
        setIsLoading(false);
    }, []);

    const removeFromWatchLater = (id) => {
        const updatedList = watchList.filter(item => item.id !== id);
        setWatchList(updatedList);
        localStorage.setItem('watchLater', JSON.stringify(updatedList));
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h2 style={{ color: 'white', margin: '20px' }}>Watch Later</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : watchList.length === 0 ? (
                    <p style={{ color: 'white', textAlign: 'center' }}>Your watch later list is empty</p>
                ) : (
                    <div className={styles.results}>
                        {watchList.map((item) => (
                            <div key={item.id} className={styles.movieCard}>
                                <Link to={`/${item.type}/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title || item.name}
                                    />
                                </Link>
                                <div className={styles.movieInfo}>
                                    <h3>{item.title || item.name}</h3>
                                    <button 
                                        onClick={() => removeFromWatchLater(item.id)}
                                        className={styles.removeButton}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default WatchLater;