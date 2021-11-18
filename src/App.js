import React, { useState,useRef } from "react"

// Styles
import './styles/style.sass'

// components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library";

// import data
import musicData from"./songdata.js";
import Nav from "./components/Nav";

function App() {

  // Ref
  const audioRef = useRef(null);
  
  // states
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(null);
  const [libraryState,setLibraryState] = useState(false);

  // From player.js
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null
  })

  // dragn drop slider to get song position
  const dragHandler = (event) => {
    // console.log(event.target.value);
    audioRef.current.currentTime = event.target.value;
    setSongInfo({...songInfo,currentTime:event.target.value})
  }

  const timeUpdateHandler = (event)=>{
      const duration = event.target.duration;
      const current = event.target.currentTime;
      // set songInfo state > ... leave whatever the state had before!!
      setSongInfo({...songInfo, currentTime: current, duration: duration})
  }
  // event handlers
  const playSongHandler = () => {
    // console.log(audioRef.current);
    
    if(isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
    }
    else{
        audioRef.current.play()
        setIsPlaying(!isPlaying);
        
    }
  }
  const endSongHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    await setCurrentSong(songs[((currentIndex + 1) % songs.length)]);
    
    if(isPlaying) audioRef.current.play();
    
  }

  return (
    <div className={`App ${ libraryState ? "library-open" : "" }`}>
      
      <Nav libraryState={libraryState} setLibraryState={setLibraryState} />

      <Song currentSong={ currentSong } />
      <Player 
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying}
        currentSong={ currentSong }
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        dragHandler={dragHandler}
        timeUpdateHandler={timeUpdateHandler}
        playSongHandler={playSongHandler}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}


      />
      <Library 
        audioRef = {audioRef}
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryState={libraryState}

      />
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={endSongHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
