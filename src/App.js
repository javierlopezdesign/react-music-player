import React, { useState } from "react";

// Styles
import './styles/style.sass';

// components
import Player from "./components/Player";
import Song from "./components/Song";

// import data
import musicData from"./songdata.js";

function App() {

  // states
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[1]);

  const [isPlaying, setIsPlaying] = useState(null);

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={ currentSong } />
      <Player 
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying}
        currentSong={ currentSong }

      />

    </div>
  );
}

export default App;
