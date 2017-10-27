import React from 'react';
import body from './app.css';
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
      <div className={styles.body}>
        <br/>
        All the songs come here!!
        <br/>
        {this.props.songs.name}
        <br/>
        First song here:
        <br/>
        {firstSong.name}
        <br/>
      </div>
    );
  }
}

export default SongsList