import React from 'react';
import styles from './app.css';
import { GENRES} from "./constants";

const genre_list = GENRES.map(function (genre, idx) {
        return (
            <div key={idx} className={styles.genre} >{genre}</div>
        );
    }
);

const Genres = (props) => {
    return (
        <div className={styles.genres}>
            {genre_list}
        </div>
    )
};

export default Genres