import React from 'react';

import SongList from './components/SongList/SongList';
import SongDetail from './components/SongDetail/SongDetail';

import { selectSong } from './actions';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.songListCont}>
        <SongList />
      </div>
      <div className={styles.songDetailCont}>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
