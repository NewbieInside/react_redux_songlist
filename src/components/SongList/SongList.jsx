import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions';

import styles from './SongList.module.css';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className={styles.songListCont} key={song.title}>
          <div className={styles.songListBtn}>
            <button
              className={styles.songListB}
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className={styles.songListTitle}>
            {song.title}
            <hr className={styles.songListHr} />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
