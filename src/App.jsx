import React from 'react';

import SongList from './components/SongList/SongList';

import { selectSong } from './actions';

const App = () =>{
  return (
    <div>
      <SongList />
    </div>
  )
}

export default App;



