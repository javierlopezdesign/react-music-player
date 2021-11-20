import React from "react";
import LibrarySong from "./LibrarySongs";


const Library = ({ audioRef, songs,setCurrentSong, isPlaying, setSongs,libraryState }) => {

    return(
        
        <div className={`library ${libraryState ? 'open': ''}`}>
            <div className="library-songs">
                {songs.map( (song) => (
                    <LibrarySong 
                        song={song} 
                        setCurrentSong={setCurrentSong}
                        songs={songs}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        key={song.key}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;