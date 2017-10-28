import React from 'react';
import styles from './songslist.css';
class SongsList extends React.Component {

  constructor(props) {
    super(props);
  }

  getFirstSong() {
    return this.props.songs[0];
  }


  render() {
    const firstSong = this.getFirstSong();
    return (
      <div className={styles.SongsList}>
        {this.props.songs.name}
      </div>
    );
  }
}

export default SongsList