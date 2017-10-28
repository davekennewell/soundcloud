import React from 'react';
import styles from './songCard.css';
import mockSongs from './constants'

class SongCard extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {
        // console.log('SongCard props:', this.props);
        const { artwork_url, title, user } = this.props;
        const { avatar_url } = user;
        return (
            <div className={styles.songCard}>
                <img src={artwork_url} className={styles.songImage}/>
                <img src={avatar_url} className={styles.artist_img}/>
                <div className={styles.title}>{title}</div>
            </div>
        );
    }
}

export default SongCard;