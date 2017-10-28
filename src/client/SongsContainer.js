import React from 'react';
import styles from './songscontainer.css';
import SongCard from './SongCard'
import {mockSongs} from "./constants";
import getSongs from './actionCreators'


class SongsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getSongs(this.props.dispatch)
    }

    render() {
        console.log('SongsContainer props:', this.props);
        const songs = this.props;
        const songCards = this.props.songs.map((song, idx) => <SongCard key={idx} {...song}/>);
        return (
            <div className={styles.SongsContainer}>
                {songCards}
            </div>
        );
    }
}

export default SongsContainer