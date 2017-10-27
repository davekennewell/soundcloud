import React from 'react';

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
      <div>
        All the songs come here!!
          {this.props.songs.name}
          <br/>
        First song here:
          {firstSong.name}
      </div>
    );
  }
}

export default SongsList